import React, { useRef, useEffect, useCallback} from 'react'
import SampleVideoSound from './Assets/samplevideo-16x9-sound.mp4'


export const Modal = ({ showVideo, setShowVideo, getClosedTimeStamp, transitionVideo}) => {

    const modalRef = useRef();
    
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowVideo(false);
            getClosedTimeStamp();
        }
      };

    const keyPress = useCallback(
        e => {

            if (e.key === 'Escape' && showVideo) {  
                setShowVideo(false);
                getClosedTimeStamp();
            }
        },
        [showVideo, setShowVideo, getClosedTimeStamp]
      );

    useEffect(
        () => {

            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );
    return (
        <>
        <div className='textOverlay'>
          <h1>Lorem ipsum dolor ismet</h1>
          <div className='center'>
          <div className='seeHow' onClick={transitionVideo}>
            <p>SEE HOW</p>
            <button className='play'></button>
          </div>
          </div>
        </div>
        {showVideo ? (
        <div className='blackbox' onClick={closeModal} ref={modalRef}>
            <div onClick={transitionVideo} className="close"></div>
            <div className='starWarsVideo'>
                <video className='soundVideo' autoPlay controls >
                    <source src={SampleVideoSound} type='video/mp4' />
                </video>
            </div>
        </div>
        ): null}
        </>
    )
}

