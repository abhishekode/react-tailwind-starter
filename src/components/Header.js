import logo from '../logo.svg';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <nav className='h-20 bg-slate-900 flex justify-evenly items-center text-white'>
          <Link to='/'><img src={logo} className="App-logo h-14" alt="logo" /></Link>
          <div className='flex justify-evenly'>
            <div className="font-medium"><Link to='/'>Home</Link></div>
            <div className="ml-4"><Link to='/about'>About</Link></div>
          </div>
          </nav>
        </>
    )
}

export default Header
