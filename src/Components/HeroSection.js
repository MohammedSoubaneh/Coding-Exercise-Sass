import React from 'react'
import BackgroundVideo from './Assets/samplevideo-16x9-10s.mp4';

function HeroSection() {
    return (
        <>
        <div className='heroSectionWrapper'>
          <video className='backgroundVideo' autoPlay loop muted>
            <source src={BackgroundVideo} type='video/mp4' />
          </video>
        </div>
        </>
    )
}

export default HeroSection
