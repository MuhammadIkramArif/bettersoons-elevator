import React, {  useState } from "react";
import Chart from "react-apexcharts";


const AppointmentReviewPieChart = () => {

  const [options] = useState({

    chart: {
      type: "radialBar",
    },
    labels: ["Face To Face", "E-Consult", "Available"],
    colors: ["#FEB019", "#52BFFD", "#4ADE80"],
    legend: {
      show: true,
      position: "bottom",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
        
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return total;
            },
          },
        },
      },
    },
  });
  const [series] = useState([80, 50, 40]);

  const total = series.reduce((acc, val) => acc + val, 0);

  return <Chart options={options} series={series} type="radialBar" />;
};

export default AppointmentReviewPieChart;
