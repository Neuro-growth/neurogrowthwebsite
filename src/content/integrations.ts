export const integrations = [
  "M-Pesa",
  "WhatsApp Business",
  "HubSpot",
  "Shopify",
  "Google Analytics",
  "Meta Ads",
] as const;

export type Integration = (typeof integrations)[number];
