import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {
  Link,
  useHistory
} from "react-router-dom";

import icon from 'assets/img/logo.png';
import resume from 'assets/resume.pdf';

import './styles.scss';

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

  const openResume = () => {
    window.open(resume, "_blank");
  }

  return ([
    <Hidden mdUp key="drawer">
      <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)} anchor={"right"}>
        <Typography className="navigationWrapper" variant="h4">
          <List>
            <ListItem>
              <Link onClick={() => toggleDrawer(false)} className="linkButton" to="/about">
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => toggleDrawer(false)} className="linkButton" to="/experience">
                Experience
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => toggleDrawer(false)} className="linkButton" to="/work">
                Work
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => toggleDrawer(false)} className="linkButton" to="/contact">
                Contact
              </Link>
            </ListItem>
            <ListItem>
              <Button  className="specialButton" onClick={openResume}>
                Resume
              </Button>
            </ListItem>
          </List>
        </Typography>
      </Drawer>
    </Hidden>,
    <AnimateNavBar key="navbar">
      <AppBar position="fixed" key="bar">
        <Toolbar className="centerContentInsideToolbar">
          <img onClick={() => history.push("/")} alt="logo" src={icon} className="logoWrapper"/>
          <Hidden mdUp>
            <IconButton onClick={() => toggleDrawer(true)} className="menuButtonIcon" edge="start" aria-label="menu">
              <i className="fas fa-bars"></i>
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Typography className="navigationWrapper">
              <Link className="linkButton" to="/about">
                About
              </Link>
              <Link className="linkButton" to="/experience">
                Experience
              </Link>
              <Link className="linkButton" to="/work">
                Work
              </Link>
              <Link className="linkButton" to="/contact">
                Contact
              </Link>
              <Button  className="specialButton" onClick={openResume}>
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
