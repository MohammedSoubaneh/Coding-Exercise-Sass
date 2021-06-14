import React from 'react'
import doctor from './Assets/icon-doctor-medium.svg';
import logo from './Assets/logo-clia.svg';

function Footer() {
    return (
        <>
        <div className='footer'>
          <div className='approval'>
            <img src={doctor} alt='Doctor Approval'/>
            <p className='text'>PHYSICAN APPROVAL</p>
          </div>
          <div className='certified'>
            <img src={logo} alt='Certified'/>
            <p>CLIA CERTIFIED<br/> FERTILITY REPORT</p>
          </div>
        </div>
        </>
    )
}

export default Footer
