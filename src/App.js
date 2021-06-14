import './App.css';
import {useState} from 'react';
import {Modal} from './Components/Modal';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';

function App() {

  const currentTimeStamp = new Date();
  const [showVideo, setShowVideo] = useState(false);
  const [timeStamp, setTimeStamp] = useState([{value: `Timestamp Opened: ${currentTimeStamp}`}]);

  
  const transitionVideo = () => {
    setShowVideo(prev => !prev);
    getTimeStamp();
  };

  const getTimeStamp = () => {
    if (showVideo === true) {
      setTimeStamp([...timeStamp, {
        value: `Timestamp Opened: ${currentTimeStamp}`}])
        console.log(timeStamp)
    } else if (showVideo === false) {
      setTimeStamp([...timeStamp, {
        value: `Timestamp Closed: ${currentTimeStamp}`}])
        console.log(timeStamp)
    } else {
      console.log('Not Working')
    }
  }


  return (
    <>
      <div className='innerContainer'>
        <HeroSection />
        <Footer />
        <Modal showVideo={showVideo} 
        setShowVideo={setShowVideo} 
        getClosedTimeStamp={getTimeStamp}
        transitionVideo={transitionVideo}/>
      </div>
      </>
  );
}

export default App;
