import React, { useState } from 'react';
import '../styles/MediaCenter.css';
import PressRelease from "./PressRelease";
import PressCoverage from "./PressCoverage";

export default function MediaCenter() {
  const [tab, setTab] = useState("release");

  return (
    <div>
      <div className="media-tabs">
        <button onClick={()=>setTab("release")} className={tab==="release"?"active":""}>Press Release</button>
        <button onClick={()=>setTab("coverage")} className={tab==="coverage"?"active":""}>Press Coverage</button>
      </div>

      {tab==="release" && <PressRelease />}
      {tab==="coverage" && <PressCoverage />}
    </div>
  );
}