import React from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  useParams
} from "react-router-dom";

import './App.scss';

function App() {
  let { location } = useParams();
  React.useEffect(() => {
    var elmnt = document.getElementById(location || 'intro');
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Nav />
      <Container maxWidth="md" className="containerStyle">
        <Intro id="intro"/>
        <About id="about"/>
        <Experience id="experience"/>
        <Work id="work"/>
        <Contact id="contact"/>
      </Container>
    </React.Fragment>
  );
}

export default App;
