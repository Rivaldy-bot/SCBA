import React, { useState, useMemo } from "react";

function formatTime(minutesFloat) {
  if (!isFinite(minutesFloat) || minutesFloat <= 0) return "--:--";
  const totalSeconds = Math.floor(minutesFloat * 60);
  const mm = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const ss = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mm}:${ss}`;
}

export default function App() {
  const [cylVolumeL, setCylVolumeL] = useState(6.8);
  const [pressure, setPressure] = useState(300);
  const [pressureUnit, setPressureUnit] = useState("bar");
  const [rmv, setRmv] = useState(40);
  const [safetyReserveBar, setSafetyReserveBar] = useState(50);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activityFactor, setActivityFactor] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white p-6 font-sans text-slate-900">
      <h1 className="text-2xl font-bold">SCBA Calculator</h1>
      <p className="text-sm text-slate-600">Aplikasi perhitungan SCBA siap hosting.</p>
    </div>
  );
}