import React  from "react";
import Chart from "react-apexcharts";


const PatientsSurvayCharts = () => {


  const options = {
 
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    legend: {
      show: true,
      position: "top",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          legend: {
            position: "bottom",
            // horizontalAlign: "center",
            // floating: false,
            offsetY: 16,
            offsetX: 0,
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "New Patients",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Old Patients",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return <Chart options={options} series={series} type="area" height={280} />;
};

export default PatientsSurvayCharts;
