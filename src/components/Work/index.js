import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { Carousel } from 'react-responsive-carousel';
import fileClip from 'assets/img/file-clip.png';
import andrei from 'assets/img/andrei.png';
import iuga from 'assets/img/iuga.png';
import './styles.scss';

import proj2files from 'assets/img/proj2';
import proj3files from 'assets/img/proj3';

const projects = [
  {
    images: proj2files,
    title: "Beagle.ai",
    description: "\
      Beagle has been architected as an artificial intelligence (AI) platform \
      for semantics that helps decision-makers understand what they are reading and how it \
      relates to their company. Beagle is trained by the users to know the critical compliance \
      elements they are looking for. It then provides the guidance and the information to the \
      decision maker to ensure they are following the rules. This leads to better corporate \
      compliance, reduced risk and higher quality employee engagement.\
    ",
    technologies: "Javascrip(ES6) | ReactJs | Redux | SASS | REST"
  },
  {
    images: proj3files,
    title: "Beagle.ai",
    description: "\
      Beagle has been architected as an artificial intelligence (AI) platform \
      for semantics that helps decision-makers understand what they are reading and how it \
      relates to their company. Beagle is trained by the users to know the critical compliance \
      elements they are looking for. It then provides the guidance and the information to the \
      decision maker to ensure they are following the rules. This leads to better corporate \
      compliance, reduced risk and higher quality employee engagement.\
    ",
    technologies: "Javascrip(ES6) | ReactJs | Redux | SASS | REST"
  }
];

function Item({ image }) {
  return (
    <div className="carouselItem">
      <img src={image} />
    </div>
  )
}

function Galery({ images }) {
  return (
    <Carousel showThumbs={false} infiniteLoop className="carouselWrapper">
      {(images || []).map(image => <Item image={image} />)}
    </Carousel>
  );
}

function ProjectIntro(props) {
  const { images, title, description, technologies, isEven } = props;
  const alignament = isEven ? "right" : "left";
  const evenClass = isEven ? "evenItem" : "not-evenItem";

  const galery = (
    <Grid item xs={12} sm={12} md={7} key={`galery-${title}`}>
      <div className={`galeryWrapper ${evenClass}`}>
        <img src={fileClip} alt="fileClip" className="fileClip"/>
        <Galery images={images}/>
      </div>
    </Grid>
  );
  const details = (
    <Grid item xs={12} sm={12} md={5} key={`details-${title}`}>
      <div className={`detailsWrapper ${evenClass}`}>
        <Typography align={alignament} paragraph variant="h5"><b>{title}</b></Typography>
        <Typography align={alignament} paragraph variant="subtitle1">{description}</Typography>
        <Typography align={alignament} paragraph variant="caption">{technologies}</Typography>
      </div>
    </Grid>
  );
  const content = [galery,details];
  return (
    <Grid container className="projectDetails">
      {isEven ? content : content.reverse()}
    </Grid>
  );
}

function Work() {
  return (
    <section className="sectionWrapper">
      <Typography className="sectionTitle" variant="h5"> <span className="colorCode-red">03.</span> Some things I've built  .  .  .</Typography>
      {
        projects.map((project, idx) => <ProjectIntro isEven={!(idx%2)} {...project}/>)
      }
    </section>
  );
}

export default Work;
