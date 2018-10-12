import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import AppBar from './components/AppBar/AppBar'
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo'
import Portfolio from './components/Portfolio/Portfolio'
import Media from './components/Media/Media'
import Culture from './components/Culture/Culture'
import './App.css';

class App extends Component {
  render() {
    const style = {
      marginTop: 100,
      // marginBottom: 32,
    };

    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <AppBar />
            <BackgroundVideo style={style} />
            <Portfolio style={style} />
            <Media style={style} />
            <Culture style={style} />
              <Typography variant="subtitle1" gutterBottom style={style} >
                This page is built by using React.js and Firebase.
              </Typography>
            <Typography variant="subtitle2" gutterBottom style={{ marginBottom: 32 }} >
              &copy; 2018 Kazuya Fujimori
            </Typography>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
