import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "NeuroGrowth Tech — AI systems for African businesses";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050D1A",
          padding: "80px 88px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: Small cyan label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#00FFCC",
            }}
          />
          <span
            style={{
              color: "#00D4FF",
              fontSize: "20px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            NeuroGrowth Tech · Nairobi
          </span>
        </div>

        {/* Center: Large headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "980px",
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "72px",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            Intelligent systems for ambitious African businesses.
          </h1>
        </div>

        {/* Bottom: Thin cyan line */}
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#00D4FF",
            opacity: 0.8,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
