import React from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import { schedules } from '../Data'


const SchedulesPage = () => {
    return (
        <div className='homepage'>
            <div className='sidebarr'>
                <SideBar />
            </div>
            <div className='contentWrap'>
                <div className='HomeNav'>
                    <h2>All Schedules</h2>
                    <Navbar />
                </div>
                <div className='content'>
                   <div className='SchedulePage'>
                   {
                        schedules.map((schedule) => {
                            return (
                                <div className='scheduleCard'>
                                    <h3>{schedule.title}</h3>
                                    <p>{schedule.time}</p>
                                    <p> at {schedule.address}</p>
                                </div>
                            )
                        })
                    }
                   </div>
                </div>
            </div>
        </div>
    )
}

export default SchedulesPage