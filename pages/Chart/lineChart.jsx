import React from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";

const plugins = [
  {
    afterDraw: (chart) => {
      // eslint-disable-next-line no-underscore-dangle
      if (chart.tooltip._active && chart.tooltip._active.length) {
        // find coordinates of tooltip
        const activePoint = chart.tooltip._active[0];
        const { ctx } = chart;
        const { x } = activePoint.element;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;

        // draw vertical line
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();
        ctx.restore();
      }
    },
  },
];

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>SPY vs NDX vs OUR</h2>
      <Line
        plugins={plugins}
        data={chartData}
        options={{
          plugins: {
            tooltip: {
              intersect: false,
              mode: "index",
            },
            hover: {
              mode: "index",
              intersect: false,
            },
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
