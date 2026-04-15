import React from "react";
import "./App.css";
import D3DonutChart from "./components/D3DonutChart";

function App() {
  const data = [
    { label: "React", value: 40 },
    { label: "Angular", value: 25 },
    { label: "Vue", value: 20 },
    { label: "Svelte", value: 15 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Donut Chart with D3</h1>
      <D3DonutChart data={data} />
    </div>
  );
}

export default App;
