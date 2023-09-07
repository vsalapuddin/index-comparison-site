import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>SPY vs NDX vs OUR</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Quarterly Price on Close",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
