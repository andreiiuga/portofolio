import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import name from "assets/img/iuga.png";
import surname from "assets/img/andrei.png";

import './styles.scss';



function Intro() {
  return (
    <section className="introWrapper">
      <Typography variant="h6"> Hi, my name is</Typography>
      <div className="picturesContainer">
        <img alt="Andrei" src={surname} className="nameClasses"/>
        <img alt="Iuga" src={name} className="nameClasses"/>
      </div>
      <Typography className="primaryLine" variant="h4">I build and design applications for the web.</Typography>
      <Typography className="shortDescription" variant="subtitle1" paragraph>
        {"I'm a software engineer based in Bucharest, Romania specializing in building and occasionally designing exceptional,\
        high-quality websites and applications."}
      </Typography>
      <Button href="mailto:andreiiuga2@gmail.com">Get In Touch</Button>
    </section>
  );
}

export default Intro;
