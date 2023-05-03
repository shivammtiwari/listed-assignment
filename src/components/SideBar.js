import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {  FaUsers, FaCalendarAlt } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import {RiDashboardLine,RiSettings5Line,RiWallet3Line} from 'react-icons/ri'


const SideBar = () => {
  const [sidebarState, setSidebarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setSidebarState(false));
  return (
    <>
      <div className="toggle">
        {sidebarState ? (
          <VscChromeClose onClick={() => setSidebarState(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setSidebarState(true);
            }}
          />
        )}

      </div>

      <div className={sidebarState ? 'sidebar' : 'SideBar'}>
        <h1 className='logo'>Board.</h1>
        <div className='menu'>
          <ul className='topMenu'>
            <li> <NavLink to='/home' className='Link'><RiDashboardLine className='NavIcon'/> Dashboard </NavLink></li>
            <li> <NavLink to='/transactions' className='Link'><RiWallet3Line className='NavIcon'/> Transactions </NavLink></li>
            <li> <NavLink to='/schedules' className='Link'><FaCalendarAlt className='NavIcon'/> Schedule </NavLink></li>
            <li> <NavLink to='/users' className='Link'><FaUsers className='NavIcon'/> Users </NavLink></li>
            <li> <NavLink to='/setting' className='Link'><RiSettings5Line className='NavIcon'/> Setting </NavLink></li>
          </ul>
          <div className='bottomMenu'>
            <p>Help </p>
            <p>Contact Us</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default SideBar

