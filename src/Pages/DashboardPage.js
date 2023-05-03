import React from 'react'
import TodaysSchedules from '../components/TodaysSchedules'
import TopProducts from '../components/TopProducts'
import Statics from '../components/Statics'
import SideBar from '../components/SideBar'
import LineChart from '../components/LineChart'
import Navbar from '../components/Navbar'


const DashboardPage = () => {
  return (
    <div className='homepage'>
      <div className='sidebarr'>
        <SideBar />
      </div>
      <div className='contentWrap'>
        <div className='HomeNav'>
          <h2>Dashboard</h2>
          <Navbar />
        </div>
        <div className='content'>
        <Statics />
        <LineChart />
        <div className='bottom'>
          <TopProducts />
          <TodaysSchedules />
        </div>
        </div>
      </div>

    </div>
  )
}

export default DashboardPage