import React from 'react'
import ReactApexChart from "react-apexcharts";
import { TopProductsData } from './../Data'

const options = {
    colors:[ '#9BDD7C', '#EE8484', '#F6DC7D'], 

    chart: {
        toolbar: {
            show: false,
        },
    },
    labels: [ 'Super Hoodies', 'Custom Short Pants', 'Basic Tees ',],
    legend: {
        position: 'right',
        horizontalAlign: 'middile',
        floating: false,
        fontSize: '16px',
        fontWeight: 600,
        markers: {
            width: 14,
            height: 14,
        },
        itemMargin: {
            horizontal: 0,
            vertical: 8
        },
    },
    stroke: {
        show: false,
    },
    responsive: [{
        breakpoint: 1000,
        options: {
            chart: {
                width: '100%',
                height: '100%',
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '12px',
                itemMargin: {
                    horizontal: 4,
                    vertical: 0
                },
            }
        }
    },
    {
        breakpoint: 500,
        options: {
            legend: {
                itemMargin: {
                    horizontal: 4,
                    vertical: 4
                },
            }
        }
    }]
};

const TopProducts = () => {
    return (
        <div className='topProductsContainer '>
            <div className='PieChartHeading'>
                <h2>Top Products</h2>
                <select name="cars" id="cars">
                    <option value=" ">May-June 2023</option>
                    <option value=" ">June-July 2023</option>
                    <option value="">July-Aug 2023</option>
                </select>
            </div>
            <div id='pieChart'>
                <div className='pieChart'>
                    <ReactApexChart options={options} series={TopProductsData} type="pie" height='100%' width='100%' />
                </div>
            </div>
        </div>
    )
}

export default TopProducts