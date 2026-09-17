import { ImageResponse } from "next/og";

export const alt = "Ashish Tirkey — Backend Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e1116",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "#d9a441",
            fontSize: 16,
            fontFamily: "monospace",
            letterSpacing: "0.05em",
            marginBottom: 32,
          }}
        >
          ashishtirkey.vercel.app
        </div>
        <div
          style={{
            color: "#edede8",
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 860,
          }}
        >
          Backend Software Engineer
        </div>
        <div
          style={{
            color: "#8a93a3",
            fontSize: 26,
            marginTop: 20,
            display: "flex",
            gap: 16,
          }}
        >
          <span>Distributed Systems</span>
          <span style={{ color: "#262b34" }}>·</span>
          <span>AI Infrastructure</span>
          <span style={{ color: "#262b34" }}>·</span>
          <span>Hyderabad</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
