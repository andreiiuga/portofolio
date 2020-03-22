import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';

import fileClip from 'assets/img/file-clip.png';
import proj2files from 'assets/img/proj2';
import proj3files from 'assets/img/proj3';
import proj4files from 'assets/img/proj4';

import './styles.scss';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



const projects = [
  {
    images: proj3files,
    title: "e-PrimariaTa.ro",
    link: "https://e-primariata.ro/",
    description: 
    [
      "E-primariaTa.ro is an application created specifically to meet the needs of city halls from Romania and the citizens they serve.",
      "Our product includes both functionalities that make efficient the activity of the city halls officials, as well as new channels and simplified procedures for interaction between citizens and mayors."
    ],
    technologies: "Javascrip(ES6) | ReactJs | Redux | Material-Ui |SASS | REST"
  },
  {
    images: proj2files,
    title: "Beagle.ai",
    link: "https://www.linkedin.com/company/beagle-inc-/about/",
    description:
    [
      "Beagle has been architected as an artificial intelligence (AI) platform for semantics that helps decision-makers understand what they are reading and how it relates to their company.",
      "Beagle is trained by the users to know the critical compliance elements they are looking for. It then provides the guidance and the information to the decision maker to ensure they are following the rules.",
      "This leads to better corporate compliance, reduced risk and higher quality employee engagement."
    ],
    technologies: "Javascrip(ES6) | ReactJs | Redux | Bootstrap | SASS | REST"
  },
  {
    images: proj4files,
    title: "BeOnTime",
    link: "https://www.innovationlabs.ro/teams/BeOnTime",
    description:
    [
      "BeOnTime is a solution that offers real time routing suggestions for public transport, relevant analytics data, smart targeted marketing.",
      "Therefore, it improves waiting time, passenger flow and overall quality of public transport."
    ],
    technologies: "Javascrip(ES6) | ReactJs | Redux | Python | Flusk | REST"
  }
];

function ResponsiveDialog({handleClose ,projectIdx}) {
  const open = projectIdx >= 0;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullWidth={true}
      maxWidth="lg"
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{`Galerie ${open && projects[projectIdx].title}`}</DialogTitle>
      <DialogContent>
        {open && <Galery images={projects[projectIdx].images} />}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function Item({ image, onImageClick }) {
  return (
    <div className="carouselItem" onClick={onImageClick}>
      <img alt="project screenshot" src={image} />
    </div>
  )
}

function Galery({ images, ...other }) {
  return (
    <Carousel showThumbs={false} infiniteLoop className="carouselWrapper">
      {(images || []).map((image, idx) => <Item key ={idx} {...other} image={image} />)}
    </Carousel>
  );
}

function ProjectIntro(props) {
  const { images, title, link, description, technologies, isEven, ...other } = props;
  const alignament = isEven ? "right" : "left";
  const evenClass = isEven ? "evenItem" : "not-evenItem";

  const galery = (
    <Grid item xs={12} sm={12} md={7} key={`galery-${title}`}>
      <div className="galeryWrapper">
        <img src={fileClip} alt="fileClip" className="fileClip"/>
        <Galery images={images} {...other}/>
      </div>
    </Grid>
  );
  const details = (
    <Grid item xs={12} sm={12} md={5} key={`details-${title}`}>
      <div className="detailsWrapper">
        <Typography align={alignament} paragraph variant="h5"><b><a href={link}>{title}</a></b></Typography>
        {
          description.map((paragraph, idx) => 
            <Typography key={idx} align={alignament} paragraph variant="subtitle1">{paragraph}</Typography>
          )
        }
      </div>
    </Grid>
  );

  const content = [galery,details];
  return (
    <div className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.2s">
      <Grid container className={`projectDetails ${evenClass}`} data-wow-duration="0.5s" data-wow-delay="0.2s">
        {isEven ? content : content.reverse()}
        <Typography align={alignament} paragraph variant="caption">{technologies}</Typography>
      </Grid>
    </div>
  );
}

function Work(props) {
  const [openedProjectGalery, toggleOpenedProjectGalery] = React.useState(-1);

  const handleClose = () => {
    toggleOpenedProjectGalery(-1);
  };

  return (
    <section {...props} className="sectionWrapper">
      <Typography className="sectionTitle" variant="h5"> <span className="colorCode-red">03.</span> Some things I've built  .  .  .</Typography>
      {
        projects.map((project, idx) =>
          <ProjectIntro key={idx} onImageClick={() => toggleOpenedProjectGalery(idx)} isEven={!(idx%2)} {...project}/>
        )
      }
      <ResponsiveDialog handleClose={handleClose} projectIdx={openedProjectGalery} />
    </section>
  );
}

export default Work;
