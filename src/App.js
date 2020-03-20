import React from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import './App.scss';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Nav />
      <Container maxWidth="md" className="containerStyle">
        <Intro/>
        <About/>
        <Experience/>
        <Work/>
      </Container>
    </React.Fragment>
  );
}

export default App;
