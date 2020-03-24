import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ImageLoader from 'react-load-image';

import portrait from 'assets/img/portrait.png';
import marker from 'assets/img/list-marker.png';
import fileClip from 'assets/img/file-clip.png';

import './styles.scss';

const COL1SKILLS = [
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "Redux"
];

const COL2SKILLS = [
  "HTML & (S)CSS",
  "Python",
  "Express",
  "Jest"
]


function About(props) {
  return (
    <section {...props} className="aboutWrapper sectionWrapper wow fadeInUp" data-wow-offset="200" data-wow-duration="0.5s" data-wow-delay="0.2s">
      <Typography className="sectionTitle" variant="h4"> <span className="colorCode-red">01.</span> About me  .  .  .</Typography>
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
          <Typography variant="subtitle1" paragraph>
          {"\
            Hello! I'm Andrei, a software engineer based in Bucharest,\
            Romania who enjoys building things that live on the internet.\
            I develop exceptional websites and web apps that provide intuitive,\
            user interfaces with efficient and modern backends.\
           "}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {"During my university years at "}
            <a href="https://upb.ro/">University Politehnica of Bucharest</a>
            {" I joined a startup ( "}
            <a href="https://www.linkedin.com/company/beagle-inc-/about/">Beagle.ai</a>
            {" ) and started developing mainly my frontend skills. "}
            {"After that, I worked on a variety of other projects during wich I learned more technologies but in the same "}
            {"time I stayed loyal to my frontend passion."}
          </Typography>
          <Typography variant="subtitle1" paragraph>
          {"\
            Here are a few technologies I've been working with recently:\
          "}
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              {COL1SKILLS.map(skill => 
                <div className="lsitItem" key={skill}>
                  <img alt=">"  src={marker} className="listMarker" />
                  <Typography variant="body2">{skill}</Typography>
                </div>
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              {COL2SKILLS.map(skill => 
                <div className="lsitItem" key={skill}>
                  <img alt=">" src={marker} className="listMarker" />
                  <Typography variant="body2">{skill}</Typography>
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <div className="portraitWrapper">
            <img alt="^" src={fileClip} className="fileClip"/>
            <ImageLoader src={portrait}>
              <img className="portraitStyle" loading="lazy"  alt="portrait"/>
              <div>Error!</div>
              <img className="portraitStyle" alt="loading..." src="https://thumbs.gfycat.com/SizzlingSmallAbalone-size_restricted.gif"/>
            </ImageLoader>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
