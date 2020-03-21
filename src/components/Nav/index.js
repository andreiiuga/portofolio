import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Link from '@material-ui/core/Link';
import {
  Link,
  useHistory
} from "react-router-dom";

import icon from 'assets/img/logo.png';
import resume from 'assets/resume.pdf';

import './styles.scss';
import WOW from 'wowjs';

function AnimateNavBar(props) {
  const { children } = props;
  const hideTrigger = useScrollTrigger({
    target: window
  });

  const elevationTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  return (
    <Slide appear={false} direction="down" in={!hideTrigger}>
    {React.cloneElement(children, {
      elevation: elevationTrigger ? 4 : 0,
      className: elevationTrigger ? "appBarDynamicHeight" : "appBarDynamicHeight extended"
    })}
    </Slide>
  )
}

function Nav() {
  const [drawerOpen, toggleDrawer] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const openResume = () => {
    window.open(resume, "_blank");
  }

  return ([
    <Hidden smUp key="drawer">
      <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Typography className="navigationWrapper">
          <List>
            <ListItem button key={'Link1'}>
              <Link component="button" variant="body2">
                Link
              </Link>
            </ListItem>
            <ListItem button key={'Link2'}>
              <Link component="button" variant="body2">
                Link
              </Link>
            </ListItem>
            <ListItem button key={'Link3'}>
              <Link component="button" variant="body2">
                Link
              </Link>
            </ListItem>
          </List>
        </Typography>
      </Drawer>
    </Hidden>,
    <AnimateNavBar>
      <AppBar position="fixed" key="bar">
        <Toolbar className="centerContentInsideToolbar">
          <Hidden smUp>
            <IconButton onClick={() => toggleDrawer(true)} className="menuButtonIcon" edge="start" aria-label="menu">
              <i className="fas fa-bars"></i>
            </IconButton>
          </Hidden>
          <img onClick={() => history.push("/")} alt="logo" src={icon} className="logoWrapper"/>
          <Hidden smDown>
            <Typography className="navigationWrapper">
              <Link to="/about" color="textSecondary" variant="h6">
                About
              </Link>
              <Link to="/experience" color="textSecondary" variant="h6">
                Experience
              </Link>
              <Link to="/work" color="textSecondary" variant="h6">
                Work
              </Link>
              <Link to="/contact" color="textSecondary" variant="h6">
                Contact
              </Link>
              <Button className="specialButton" onClick={openResume}>
                Resume
              </Button>
            </Typography>
          </Hidden>
        </Toolbar>
      </AppBar>
    </AnimateNavBar>
  ]);
}

export default Nav;
