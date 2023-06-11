import React from "react";

const Chart = () => {
  const DATA_COUNT = 12;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const datapoints = [
    0, 20, 20, 60, 60, 120, 150, 180, 120, 125, 105, 110, 170,
  ];

  const chartConfig: ChartConfiguration<"line"> = {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Cubic interpolation (monotone)",
          data: dataStore.chart_data,
          borderColor: "#e76868",
          fill: false,
          cubicInterpolationMode: "monotone",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Chart.js Line Chart - Cubic interpolation mode",
        },
      },
      interaction: {
        mode: "index" as InteractionMode,
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
          },
          suggestedMin: -10,
          suggestedMax: 200,
        },
      },
    },
  };

  return <div>Chart</div>;
};

export default Chart;
