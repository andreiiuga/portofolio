import React from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingIntro from './components/LoadingIntro';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  useParams
} from "react-router-dom";

import WOW from 'wowjs';

import './App.scss';

function App() {
  let { location } = useParams();
  const [doneLoading, setDoneLoading] = React.useState(false);

  React.useEffect(() => {
    var elmnt = document.getElementById(location || 'intro');
    elmnt && elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  React.useEffect(() => {
    var elmnt = document.getElementById(location || 'intro');
    elmnt && elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
    new WOW.WOW().init();
    setTimeout(() => setDoneLoading(true), 4800);
  }, []);

  return (
    <React.Fragment>
      <LoadingIntro className={doneLoading ? "doneLoading" : ""}/>
      <CssBaseline />
      <Nav />
      <Container maxWidth="md" className={`containerStyle ${doneLoading ? "" : "hideContent"}`}>
        <Intro id="intro"/>
        <About id="about"/>
        <Experience id="experience"/>
        <Work id="work"/>
        <Contact id="contact"/>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
