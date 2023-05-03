import React from 'react'
import {BiLike} from 'react-icons/bi'
import { FaMoneyBill,FaUsers } from 'react-icons/fa'
import {RiWallet3Line} from 'react-icons/ri'


const Statics = () => {
  return (
    <div className='revenue'>
     <div className='revenueCard'>
        <div className='icondiv'>
          <FaMoneyBill className='icon' />
        </div>
        <p>Total Revenue</p>
        <h1>$2,129</h1>
      </div>
      <div className='revenueCard'>
        <div className='icondiv'>
          <RiWallet3Line className='icon' />
        </div>
        <p>Total Transactions</p>
        <h1>1,529</h1>
      </div>
      <div className='revenueCard'>
        <div className='icondiv'>
          <BiLike className='icon' />
        </div>
        <p>Total Likes</p>
        <h1>9,721</h1>
      </div>
      <div className='revenueCard'>
        <div className='icondiv'>
          <FaUsers className='icon' />
        </div>
        <p>Total Users</p>
        <h1>892</h1>
      </div>
    </div>
  )
}

export default Statics