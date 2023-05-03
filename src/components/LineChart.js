import React from 'react'
import ReactApexChart from "react-apexcharts";
import { LineChartData } from './../Data'

const options = {
  colors:[ '#9BDD7C', '#E9A0A0'], 
  xaxis: {
    categories: ["week 1", "week 2", "week 3", "week 4", 'week 5']
  },
  stroke: {
    curve: "smooth",
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: false,
    fontSize: '16px',
    markers: {
      width: 14,
      height: 14,
    },
    itemMargin: {
      // horizontal: 120,
      // vertical: 10
    },

  },

};

const LineChart = () => {
  return (
    <div className='Chart'>
      <div className='ChartHeading'>
        <h2>Activities</h2>
        <select name="cars" id="cars">
          <option value=" ">May-June 2023</option>
          <option value=" ">June-July 2023</option>
          <option value="">July-Aug 2023</option>
        </select>
      </div>
      <ReactApexChart type="line" series={LineChartData} options={options} height={200} />
    </div>
  )
}

export default LineChart