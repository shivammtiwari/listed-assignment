import React from 'react'
import {RiNotification2Line} from 'react-icons/ri'

const Navbar = () => {
    return (
        <div className='navbar'>
                <input type='search' placeholder='search' />
                <div className='profile'>
                <RiNotification2Line className='natification'/>
                <img className='profilePic' src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' alt=''/>
                </div>
        </div>
    )
}

export default Navbar