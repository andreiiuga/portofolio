import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import icon from 'assets/img/logo.png';

import './styles.scss';



function Intro(props) {
  return (
    <section {...props} className="sectionWrapper wow fadeInUp"  data-wow-duration="0.5s" data-wow-delay="0.2s">
      <Typography className="sectionTitle" variant="h4"> <span className="colorCode-red">04.</span> What's next ? . . . </Typography>
      <Typography className="invitation" align="center" variant="h2"><b>Get In Touch</b></Typography>
      <Typography align="center" variant="h6">I'm currently active looking for new oportunities and projects to work on.</Typography>
      <Typography align="center" variant="h6">Whether for a potential project or just to say hi, my inbox is allways open !</Typography>
      <Typography className="invitation" align="center" variant="h6"><Button href="mailto:andreiiuga2@gmail.com">Say Hello</Button></Typography>
      <Typography align="center"><img alt="logo" src={icon} className="bottomIconWrapper"/></Typography>
    </section>
  );
}

export default Intro;
