import React from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'


const UsersPage = () => {
  return (
    <div className='homepage'>
    <div className='sidebarr'>
        <SideBar />
    </div>
    <div className='contentWrap'>
        <div className='HomeNav'>
            <h2>User List</h2>
            <Navbar />
        </div>
    </div>
</div>

  )
}

export default UsersPage