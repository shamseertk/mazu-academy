import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import img from '../images/carousel/carousel1.jpg';
import img1 from '../images/carousel/carousel2.jpg';
import img2 from '../images/carousel/carousel3.jpg';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  slider: {
    position: 'relative',
    width: '100%',
    height: '600px',
    overflow: 'hidden',
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: '#68eaa9',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
  }
})

function Home() {
  const classes = styles();
  return <React.Fragment>
    <div className="container-full">
      <Slider autoplay={2000} previousButton={null} nextButton={null} classNames={classes}>
        <div style={{background: `url(${img}) no-repeat center center`, backgroundSize: 'cover'}}>
          <div className={classes.center}>
            <h2>Welcome</h2>
            <p>This portal helps Kids to practice arabic letters, reading and writing.</p>
          </div>
        </div>
        <div style={{background: `url(${img1}) no-repeat center center`, backgroundSize: 'cover'}}>
          <div className={classes.center}>
            <h2>We Created It, Because...</h2>
            <p>Ideas without action aren’t ideas. They’re regrets.–Steve Jobs</p>
          </div>
        </div>
        <div style={{background: `url(${img2}) no-repeat center center`, backgroundSize: 'cover'}} className="center">
          <div className={classes.center}>
            <h2>Feedback Please...</h2>
            <p>We rely on feedbacks. Please send us your feedback.</p>
          </div>
        </div>
      </Slider>
    </div>
    <div className="container">
      <div style={{padding: '20px 0px 15px 25px', color: 'gray'}}>
        <p> The portal helps kids to learn Arabic alphabets, reading and writing. Navigate throgh the levels. Each level has different sections.</p>
      </div>
    </div>
  </React.Fragment>
}

export default Home;
