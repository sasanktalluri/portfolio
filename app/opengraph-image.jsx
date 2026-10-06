import { ImageResponse } from "next/og";

// Social preview card (LinkedIn, Slack, X) rendered at build time
export const alt = "Sasank Talluri - Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    background: "#010a13",
                    backgroundImage: "radial-gradient(circle at 85% 10%, rgba(13,196,217,0.22), transparent 45%)",
                    fontFamily: "monospace",
                }}
            >
                <div style={{ display: "flex", fontSize: 40, color: "#d9b23d", fontWeight: 700 }}>
                    &quot;ST&quot;<span style={{ color: "#0dc4d9", marginLeft: 12 }}>.</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 88, fontWeight: 700, color: "#0dc4d9", lineHeight: 1.05 }}>Sasank Talluri</div>
                    <div style={{ fontSize: 36, color: "#d9b23d", marginTop: 20 }}>
                        Software Engineer · Backend, Distributed Systems & AI
                    </div>
                </div>
                <div style={{ display: "flex", fontSize: 26, color: "#f2e9d8", opacity: 0.7 }}>
                    sasanktalluri.dev
                </div>
            </div>
        ),
        size
    );
}
