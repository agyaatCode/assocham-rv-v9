import "../styles/KnowledgeReport.css";

export default function KnowledgeReport() {
  const data = [1,2,3,4];

  return (
    <div className="report-grid">
      {data.map(i => (
        <div className="report-card" key={i}>
          <img src={`https://picsum.photos/300/200?random=${i}`} />
          <h3>Report {i}</h3>
          <p>Industry insights and analytics.</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}