import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import name from "assets/img/iuga_optimized.png";
import surname from "assets/img/andrei_optimized.png";

import './styles.scss';



function Intro(props) {
  return (
    <section {...props} className="sectionWrapper introWrapper">
      <Typography variant="h6" className="wow fadeInUp"  data-wow-duration="0.35s" data-wow-delay="0.15s">Hi, my name is</Typography>
      <div className="picturesContainer wow fadeInUp"  data-wow-duration="0.35s" data-wow-delay="0.3s">
        <img alt="Andrei" src={surname} className="nameClasses"/>
        <img alt="Iuga" src={name} className="nameClasses"/>
      </div>
      <Typography className="primaryLine wow fadeInUp" variant="h4"  data-wow-duration="0.35s" data-wow-delay="0.45s">I build and design applications for the web.</Typography>
      <Typography className="primaryLine wow fadeInUp shortDescription" variant="subtitle1" paragraph  data-wow-duration="0.35s" data-wow-delay="0.6s">
        {"I'm a software engineer based in Bucharest, Romania specializing in building and occasionally designing exceptional,\
        high-quality websites and applications."}
      </Typography>
      <Button href="mailto:andreiiuga2@gmail.com" className="wow fadeInUp"  data-wow-duration="0.35s" data-wow-delay="0.75s">Get In Touch</Button>
    </section>
  );
}

export default Intro;
