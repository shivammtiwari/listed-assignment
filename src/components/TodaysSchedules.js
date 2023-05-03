import React from 'react'
import { schedules } from './../Data'
import { Link } from 'react-router-dom'

const TodaysSchedules = () => {
    return (
        <>
            <div className='scheduleContainer'>
                <div className='ScheduleHeading'>
                    <h2>Today's Schedules</h2>
                    <div className='seeAll'>
                        <Link to='/schedules'>
                            <span>See all</span>
                        </Link>
                    </div>
                </div>
                {
                    schedules.filter((schedule) => {
                        if (schedule.date === new Date().toLocaleDateString()) {
                            return schedule
                        } else return null;
                    }).map((schedule) => {
                        return (
                            <div className='scheduleCard'>
                                <h3>{schedule.title}</h3>
                                <p>{schedule.time}</p>
                                <p>At {schedule.address}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TodaysSchedules