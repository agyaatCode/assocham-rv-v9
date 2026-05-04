// import { FaUsers, FaBuilding, FaGlobe, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

// const stats = [
//   { icon: <FaUsers />, value: "4,50,000+", label: "Members" },
//   { icon: <FaBuilding />, value: "4,000+", label: "Member Companies" },
//   { icon: <FaGlobe />, value: "100+", label: "Countries Connected" },
//   { icon: <FaCalendarAlt />, value: "5,000+", label: "Events & Programs" },
//   { icon: <FaFileAlt />, value: "250+", label: "Reports & Publications" },
// ];

// export default function Highlighting() {
//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         {stats.map((stat, index) => (
//           <div key={index} style={styles.statItem}>
//             <div style={styles.iconWrapper}>{stat.icon}</div>
//             <div style={styles.textGroup}>
//               <span style={styles.value}>{stat.value}</span>
//               <span style={styles.label}>{stat.label}</span>
//             </div>
//             {index < stats.length - 1 && <div style={styles.divider} />}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// const styles = {
//   section: {
//     width: "100%",
//     background: "#ffffff",
//     borderBottom: "1px solid #e8e8e8",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//     padding: "0",
//   },
//   container: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 32px",
//     position: "relative",
//   },
//   statItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "20px 0",
//     flex: 1,
//     position: "relative",
//   },
//   iconWrapper: {
//     fontSize: "26px",
//     color: "#cc0000",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     minWidth: "32px",
//   },
//   textGroup: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "2px",
//   },
//   value: {
//     fontFamily: "'Segoe UI', sans-serif",
//     fontSize: "20px",
//     fontWeight: "700",
//     color: "#cc0000",
//     lineHeight: "1.2",
//     letterSpacing: "-0.3px",
//   },
//   label: {
//     fontFamily: "'Segoe UI', sans-serif",
//     fontSize: "12px",
//     color: "#555555",
//     fontWeight: "500",
//     letterSpacing: "0.2px",
//   },
//   divider: {
//     position: "absolute",
//     right: "0",
//     top: "20%",
//     height: "60%",
//     width: "1px",
//     background: "#e0e0e0",
//   },
// };



// new code 



import {
  FaUsers,
  FaBuilding,
  FaGlobe,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";

const stats = [
  { icon: <FaUsers />, value: "4,50,000+", label: "Members" },
  { icon: <FaBuilding />, value: "4,000+", label: "Member Companies" },
  { icon: <FaGlobe />, value: "100+", label: "Countries Connected" },
  { icon: <FaCalendarAlt />, value: "5,000+", label: "Events & Programs" },
  { icon: <FaFileAlt />, value: "250+", label: "Reports & Publications" },
];

export default function Highlighting() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statItem}>
            <div style={styles.iconWrapper}>{stat.icon}</div>

            <div style={styles.textGroup}>
              <span style={styles.value}>{stat.value}</span>
              <span style={styles.label}>{stat.label}</span>
            </div>

            {index < stats.length - 1 && (
              <div style={styles.divider} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    background:
      "linear-gradient(90deg, #fff8f2 0%, #ffffff 50%, #fff3e0 100%)",
    borderTop: "1px solid rgba(218,33,40,0.08)",
    borderBottom: "1px solid rgba(218,33,40,0.08)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
    padding: "0",
  },

  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    position: "relative",
    backdropFilter: "blur(10px)",
  },

  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "22px 0",
    flex: 1,
    position: "relative",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  iconWrapper: {
    fontSize: "26px",
    color: "#f7941d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "38px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, rgba(218,33,40,0.08), rgba(253,185,19,0.15))",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },

  textGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

value: {
  fontFamily: "'Segoe UI', sans-serif",
  fontSize: "22px",
  fontWeight: "700",
  color: "#da2128",
  lineHeight: "1.1",
  letterSpacing: "-0.4px",
},

label: {
  fontFamily: "'Segoe UI', sans-serif",
  fontSize: "12px",
  color: "#2f2f2f",
  fontWeight: "600",
  letterSpacing: "0.3px",
  textTransform: "uppercase",
},

  divider: {
    position: "absolute",
    right: "0",
    top: "20%",
    height: "60%",
    width: "1px",
    background:
      "linear-gradient(to bottom, transparent, rgba(230,89,37,0.25), transparent)",
  },
};