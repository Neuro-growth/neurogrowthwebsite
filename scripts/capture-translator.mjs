/**
 * scripts/capture-translator.mjs
 *
 * Captures clean UI screenshots from the Gikuyu AI Translator app running on port 3010.
 * Resolves Playwright from the scratch folder: ../_ng-assets/node_modules/playwright.
 *
 * Usage:
 *   node scripts/capture-translator.mjs
 */

import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const scratchDir = path.resolve(repoRoot, "../_ng-assets");
const shotsDir = path.resolve(scratchDir, "shots");

if (!fs.existsSync(shotsDir)) {
  fs.mkdirSync(shotsDir, { recursive: true });
}

// Resolve Playwright from ../_ng-assets
const scratchRequire = createRequire(path.join(scratchDir, "package.json"));
const { chromium } = scratchRequire("playwright");

const BASE_URL = process.env.TRANSLATOR_URL || "http://localhost:3010";

const ROUTES = [
  { path: "/", filename: "landing.png" },
  { path: "/translate", filename: "translate.png" },
  { path: "/speak", filename: "speak.png" },
  { path: "/dashboard", filename: "dashboard.png" },
];

async function capture() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const executablePath = fs.existsSync(chromePath)
    ? chromePath
    : fs.existsSync(edgePath)
    ? edgePath
    : undefined;

  console.log(`Launching browser (executablePath: ${executablePath || "bundled"})...`);
  const browser = await chromium.launch({
    headless: true,
    executablePath,
  });

  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const page = await desktopContext.newPage();

  for (const route of ROUTES) {
    const url = `${BASE_URL}${route.path}`;
    const outFile = path.join(shotsDir, route.filename);
    console.log(`Navigating to ${url}...`);

    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    } catch (err) {
      console.warn(`Notice: navigation to ${url} did not idle completely (${err.message}). Continuing...`);
    }

    try {
      await page.addStyleTag({
        content: "nextjs-portal, [data-nextjs-toast], [data-next-badge-root] { display: none !important; }",
      });
    } catch (err) {
      console.warn(`Notice injecting CSS:`, err.message);
    }

    await new Promise((r) => setTimeout(r, 1500));

    console.log(`Saving viewport screenshot to ${outFile}...`);
    await page.screenshot({ path: outFile, fullPage: false });
    console.log(`Wrote ${route.filename}`);
  }

  await desktopContext.close();

  // Mobile capture for /translate
  console.log("Capturing mobile /translate (390x844 @ 3x)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
  });

  const mobilePage = await mobileContext.newPage();
  const mobileUrl = `${BASE_URL}/translate`;
  const mobileOut = path.join(shotsDir, "translate-mobile.png");

  try {
    await mobilePage.goto(mobileUrl, { waitUntil: "networkidle", timeout: 60000 });
  } catch (err) {
    console.warn(`Notice on mobile: ${err.message}. Continuing...`);
  }

  try {
    await mobilePage.addStyleTag({
      content: "nextjs-portal, [data-nextjs-toast], [data-next-badge-root] { display: none !important; }",
    });
  } catch (err) {
    console.warn(`Notice injecting CSS on mobile:`, err.message);
  }

  await new Promise((r) => setTimeout(r, 1500));
  await mobilePage.screenshot({ path: mobileOut, fullPage: false });
  console.log("Wrote translate-mobile.png");

  await mobileContext.close();
  await browser.close();
  console.log("All captures completed successfully!");
}

capture().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
