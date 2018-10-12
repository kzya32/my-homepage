import React from 'react';
import ReactPlayer from 'react-player'
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const BackgroundVideo = (props) => {
  const videoUrl = 'https://firebasestorage.googleapis.com/v0/b/myhomepage-93213.appspot.com/o/videos%2FBlack%20And%20White%20Video%20Of%20Man%20Infront%20Of%20The%20Computer.mp4?alt=media&token=c94e81ae-4766-46de-8adc-5ba48d553f27';

  const containerStyle = {
    ...props.style,
    width: '100%',
    height: '100%',
  };

  const textStyle = {
    position: 'absolute',
    bottom: window.innerHeight * 0.5,
    left: 0,
    right: 0,
    margin: 'auto',
    fontSize: 64,
    color: 'white',
  };

  return (
    <div className={containerStyle}>
      <ReactPlayer
        url={videoUrl}
        playing
        loop
        width='100%'
        height='100%'
        // className={styles.Container}
      />
      <Fade
        in={true}
        timeout={3000}
      >
        <Typography variant="h2" gutterBottom style={textStyle} >
          Kazuya Fujimori
        </Typography>
      </Fade>
    </div>
  )
}

export default BackgroundVideo;
