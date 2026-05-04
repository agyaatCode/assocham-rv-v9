
// import { knowledgeReports, newsletters } from "../data/navData";

// export default function KnowledgeCenter() {
//   return (
//     <div style={{ background: "#f9f9f9", padding: "40px 0" }}>
//       <div className="container">
//         {/* Section header */}
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
//           <div className="section-title">Knowledge Center</div>
//           <span className="view-all">Explore Knowledge Center →</span>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: 30 }}>
//           <ReportsGrid />
//           <NewsletterList />
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---- Knowledge Reports 2x2 grid ---- */
// function ReportsGrid() {
//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
//         <div style={{ fontSize: 15, fontWeight: 700, color: "#222" }}>Knowledge Reports</div>
//         <span className="view-all">View All</span>
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 14 }}>
//         {knowledgeReports.map((r, i) => (
//           <ReportCard key={i} report={r} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function ReportCard({ report }) {
//   return (
//     <div
//       className="card-hover"
//       style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 4, overflow: "hidden" }}
//     >
//       {/* Thumbnail with overlay title */}
//       <div style={{ position: "relative", overflow: "hidden" }}>
//       {/* <div style={{ position: "relative", height: 300, background: report.color, overflow: "hidden" }}> */}
//         <img
//           src={report.img}
//           alt=""
//           style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 1,  }}
//           // style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7, mixBlendMode: "multiply" }}
//         />
//         <div
//           style={{
//             position: "absolute", inset: 0,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             padding: 12, textAlign: "center",
//           }}
//         >
//           {/* <div
//             style={{
//               color: "#fff", fontWeight: 800, fontSize: 13,
//               lineHeight: 1.3, textShadow: "0 1px 3px rgba(0,0,0,0.5)",
//               textTransform: "uppercase",
//             }}
//           >
//             {report.title}
//           </div> */}
//         </div>
//       </div>

//       {/* Card body */}
//       <div style={{ padding: "10px 12px" }}>
//         <div style={{ fontSize: 12, fontWeight: 600, color: "#333", marginBottom: 4 }}>{report.title}</div>
//         <div style={{ fontSize: 11, color: "#999", marginBottom: 8 }}>{report.date}</div>
//         <div style={{ fontSize: 11, color: "#c0392b", fontWeight: 600, cursor: "pointer" }}>⬇ Download PDF</div>
//       </div>
//     </div>
//   );
// }

// /* ---- Newsletter list ---- */
// function NewsletterList() {
//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
//         <div style={{ fontSize: 15, fontWeight: 700, color: "#222" }}>Newsletter</div>
//         <span className="view-all">View All</span>
//       </div>

//       {newsletters.map((n, i) => (
//         <div
//           key={i}
//           className="card-hover"
//           style={{
//             background: "#fff", border: "1px solid #e5e7eb", borderRadius: 4,
//             padding: 14, marginBottom: 12, display: "flex", gap: 12, alignItems: "center",
//           }}
//         >
//           <img
//             src={n.img}
//             alt=""
//             style={{ width: 70, height: 55, objectFit: "cover", borderRadius: 3, flexShrink: 0 }}
//           />
//           <div>
//             <div style={{ fontSize: 13, fontWeight: 700, color: "#222", marginBottom: 3 }}>{n.title}</div>
//             <div style={{ fontSize: 11, color: "#888", marginBottom: 8 }}>{n.issue}</div>
//             <span style={{ fontSize: 12, color: "#c0392b", fontWeight: 600, cursor: "pointer" }}>Read More →</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }






// new code 





import { knowledgeReports, newsletters } from "../data/navData";

export default function KnowledgeCenter() {
  return (
    <div className=" bg-gradient-to-br from-[#1a0708] via-[#2a0c10] to-[#3a0f14] text-white relative overflow-hidden"
      style={{
        // background: "linear-gradient(135deg, #fff5f5, #fdeaea)",
        // background: "linear-gradient(to right, #e8730625 0%, #fa900ea1 100%)",
        padding: "60px 0",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <div className="section-title" style={{color: '#fff'}}>Knowledge Center</div>
          <span className="view-all">Explore Knowledge Center →</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 0.9fr",
            gap: 20,
          }}
        >
          <ReportsGrid />
          <NewsletterList />
        </div>
      </div>
    </div>
  );
}

/* ================= REPORTS GRID ================= */

function ReportsGrid() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>
          Knowledge Reports
        </div>
        <span className="view-all">View All</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 320px))", // 👈 width control
          gap: 28,
        }}
      >
        {knowledgeReports.map((r, i) => (
          <div
            key={i}
            style={{
              marginTop: i % 2 !== 0 ? 50 : 0, // 🔥 zig-zag
            }}
          >
            <ReportCard report={r} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= REPORT CARD ================= */

function ReportCard({ report }) {
  return (
    <div
      className="card-hover"
      style={{
        background: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid #eee",
        transition: "all 0.35s ease",
        width: "fit-content",
      }}
    >
      {/* Tall Image */}
      <div style={{ position: "relative", height: 280, overflow: "hidden" }}>
        <img
          src={report.img}
          alt=""
          style={{
            // width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.5s",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
          }}
        />

        {/* Title */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            right: 10,
            color: "#fff",
            fontSize: 13,
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          {report.title}
        </div>
      </div>

      {/* Compact Bottom */}
      <div
        style={{
          padding: "10px 12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 11, color: "#888" }}>{report.date}</div>

        <div
          style={{
            fontSize: 11,
            color: "#c0392b",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Download ↓
        </div>
      </div>
    </div>
  );
}

/* ================= NEWSLETTER ================= */

function NewsletterList() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>
          Newsletter
        </div>
        <span className="view-all">View All</span>
      </div>

      {newsletters.map((n, i) => (
        <div
          key={i}
          className="card-hover"
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 10,
            padding: 14,
            marginBottom: 14,
            display: "flex",
            gap: 12,
            alignItems: "center",
            transition: "0.3s",
          }}
        >
          <img
            src={n.img}
            alt=""
            style={{
              width: 75,
              height: 60,
              objectFit: "cover",
              borderRadius: 6,
              flexShrink: 0,
            }}
          />

          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#222",
                marginBottom: 4,
              }}
            >
              {n.title}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#888",
                marginBottom: 6,
              }}
            >
              {n.issue}
            </div>

            <span
              style={{
                fontSize: 12,
                color: "#c0392b",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Read More →
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}