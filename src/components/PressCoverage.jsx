import "../styles/PressCoverage.css";

export default function PressCoverage() {
  return (
    <div className="coverage-grid">
      {[1,2,3].map(i => (
        <div className="coverage-card" key={i}>
          <h3>Coverage {i}</h3>
          <p>Media highlights</p>
        </div>
      ))}
    </div>
  );
}