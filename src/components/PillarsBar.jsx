// // PillarsBar.jsx
// // Horizontal strip of 8 key pillars below the hero slider

// import { pillars } from "../data/navData";

// export default function PillarsBar() {
//   return (
//     <div
//       style={{
//         background: "#fff",
//         borderBottom: "1px solid #e5e7eb",
//       }}
//     >
//       <div className="container">
//         <div
//           style={{
//             display: "flex",
//             overflowX: "auto",
//           }}
//         >
//           {pillars.map((p, i) => {
//             const Icon = p.icon;

//             return (
//               <div
//                 key={i}
//                 className="card-hover"
//                 style={{
//                   flex: "0 0 12.5%",
//                   padding: "18px 8px",
//                   textAlign: "center",
//                   borderRight:
//                     i < pillars.length - 1
//                       ? "1px solid #f0f0f0"
//                       : "none",
//                   cursor: "pointer",
//                   minWidth: "140px",
//                 }}
//               >
//                 {/* Icon */}
//                 <div
//                   style={{
//                     fontSize: 26,
//                     marginBottom: 8,
//                     color: "#d62027",
//                     display: "flex",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Icon size={26} />
//                 </div>

//                 {/* Label */}
//                 <div
//                   style={{
//                     fontSize: "11.5px",
//                     fontWeight: 600,
//                     color: "#333",
//                     lineHeight: 1.3,
//                   }}
//                 >
//                   {p.label}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }



// new new code 



import { pillars } from "../data/navData";

export default function PillarsBar() {
  return (
    <div style={styles.wrapper}>
      <div className="container">
        <div style={styles.row}>
          {pillars.map((p, i) => {
            const Icon = p.icon;

            return (
              <div
                key={i}
                style={{
                  ...styles.card,
                  borderRight:
                    i < pillars.length - 1
                      ? "1px solid rgba(0,0,0,0.06)"
                      : "none",
                }}
              >
                {/* Icon */}
                <div style={styles.iconWrap}>
                  <Icon size={24} />
                </div>

                {/* Label */}
                <div style={styles.label}>{p.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  // wrapper: {
  //   width: "100%",
  //   background:
  //     "linear-gradient(90deg, #fff8f2 0%, #ffffff 50%, #fff3e0 100%)",
  //   borderTop: "1px solid rgba(218,33,40,0.06)",
  //   borderBottom: "1px solid rgba(218,33,40,0.08)",
  //   boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
  //   position: "relative",
  //   zIndex: 10,
  // },

  wrapper: {
  width: "100%",
  position: "relative",
  zIndex: 10,
  overflow: "hidden",
  background: `
    linear-gradient(90deg, #fff8f2 0%, #ffffff 50%, #fff3e0 100%),
    radial-gradient(circle at top right, rgba(253,185,19,0.10), transparent 35%),
    radial-gradient(circle at bottom left, rgba(218,33,40,0.08), transparent 40%)
  `,
  borderTop: "1px solid rgba(218,33,40,0.06)",
  borderBottom: "1px solid rgba(218,33,40,0.08)",
  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
},

  row: {
    display: "flex",
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },

  card: {
    flex: "0 0 12.5%",
    minWidth: "145px",
    padding: "20px 10px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
  },

  iconWrap: {
    width: "48px",
    height: "48px",
    margin: "0 auto 10px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#f7941d",
    background:
      "linear-gradient(135deg, rgba(218,33,40,0.08), rgba(253,185,19,0.18))",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },

  label: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#2f2f2f",
    lineHeight: 1.4,
    letterSpacing: "0.2px",
  },
};