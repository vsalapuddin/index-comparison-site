import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { spyData } from "../utils/spyData";
import { ndxData } from "../utils/ndxData";

import LineChart from "./Chart/lineChart";

Chart.register(CategoryScale);

export default function App() {
  const [chartData, setChartData] = useState({
    labels: spyData.map((data) => data.Year),
    datasets: [
      {
        label: "SPY",
        data: spyData.map((data) => data.Close),
        backgroundColor: ["#87CEEB"],
        borderColor: "#87CEEB",
        borderWidth: 1,
      },
      {
        label: "NDX",
        data: ndxData.map((data) => data.Close),
        backgroundColor: ["#00c805"],
        borderColor: "#00c805",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 no-scrollbar">
      <LineChart chartData={chartData} />
    </div>
  );
}
