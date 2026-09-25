import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 56,
          background: "#eaf5ef",
          color: "#18332a",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: 64,
            border: "2px solid #c9dfd1",
            borderRadius: 32,
            background: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: 80,
              height: 80,
              justifyContent: "center",
              borderRadius: 20,
              background: "#18332a",
              color: "#e6ff9c",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            PS
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -3 }}>
              Priyanshu Sinha
            </div>
            <div style={{ marginTop: 12, fontSize: 31, color: "#526a5e" }}>
              Software Engineer &amp; AI Developer
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 23, color: "#526a5e" }}>
            Building AI tools, full-stack apps, and developer products.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
