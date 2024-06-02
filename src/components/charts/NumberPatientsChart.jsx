import React from "react";
import Chart from "react-apexcharts";


const NumberPatientsChart = () => {

  const options = {

    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded-lg",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  const series = [
    {
      name: "Male",
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: "Female",
      data: [76, 85, 101, 98, 87, 105],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default NumberPatientsChart;
