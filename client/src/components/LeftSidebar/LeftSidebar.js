import React from 'react'
import './leftSidebar.css';
import Globe from '../../assets/globe-solid.svg';
import{NavLink} from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav' >
            <NavLink to='/' className='side-nav-links'activeclassname='active' >
             <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div><p>Public</p></div>
                <NavLink to='/Questions' activeclassname='active' className='side-nav-links'>
                    <img src={Globe} alt='Globe' width='18px' />
                    <p style={{paddingLeft:'10px'}}>Questions</p>
                </NavLink>
                <NavLink to='/tags' className='side-nav-links' activeclassname='active'>
                     <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeclassname='active'>
                    <p>Users</p>

                </NavLink>

            </div>

        </nav>

      
    </div>
  )
}

export default LeftSidebar
