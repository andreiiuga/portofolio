import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import marker from 'assets/img/list-marker.png';

import './styles.scss';

function TabPanel(props) {
  const { title, company, companyURL, period, responsabilities, value, index, ...other } = props;

  return (
    <div
      className="panelWrapper"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      <Typography variant="h5" component="span">{title}</Typography>
      <Typography variant="h5" component="span"><a href={companyURL}>{` @ ${company}`}</a></Typography>
      <Typography>{period}</Typography>
      <List>
      {
        responsabilities.map(responsability => 
          <ListItem>
            <ListItemIcon>
              <img src={marker} className="listMarker" />
            </ListItemIcon>
            <ListItemText><Typography variant="body2">{responsability}</Typography></ListItemText>
          </ListItem>,
        )}
      </List>
    </div>
  );
}

TabPanel.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  companyURL: PropTypes.string,
  period: PropTypes.string,
  responsabilities: PropTypes.array,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="sectionWrapper">
      <Typography className="sectionTitle" variant="h5"> <span className="colorCode-red">02.</span> Where I've Worked  .  .  .</Typography>
      <div className="tabsPannelWrapper">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className="tabsWrapper"
        >
          <Tab label="AIPSS" {...a11yProps(0)} />
          <Tab label="Metro Systems" {...a11yProps(1)} />
          <Tab label="Beagle.ai" {...a11yProps(2)} />
        </Tabs>
        <TabPanel
          title="FrontEnd UI/UX engineer and designer"
          company="AIPSS"
          companyURL="https://aipss.ro/"
          period="Nov 2019 - Present"
          responsabilities={[
            "Developed and designed a Digital Town Hall/Public Institution web application using ReactJs, Redux and Material-Ui",
            "The application is designed for public servants inside institutions but also for citizenz/public persons, it is ​fully responsive​ and ​modernly designed"
          ]}
          value={value}
          index={0}
        />
        <TabPanel
          title="Engineer"
          company="Metro Systems"
          companyURL="https://www.metrosystems.ro/"
          period="Aug 2018 - Nov 2019"
          responsabilities={[
            "Write modern, performant, maintainable code for a diverse array of internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, Jest, React, ​NodeJs​, and Express",
            "Communicate with multi-disciplinary teams of engineers, designers and architects on a daily basis",
            "Front-End developer​ for a store management application using ReactJs​, ​Redux​, ​Jest, SASS and REST​",
            "Full Stack JavaScript​ ​deveoper​ for an application used internaly by HR department (​NodeJs​, ​ReactJs​, ​Redux, MySQL, REST​)"
          ]}
          value={value}
          index={1}
        />
        <TabPanel
          title="Front-End UI/UX developer​ and designer"
          company="Beagle.ai"
          companyURL="https://www.linkedin.com/company/beagle-inc-/about/"
          period="Jun 2016 - Jul 2018"
          responsabilities={[
            "Developed and maintained code for in-house web applications primarily using ReactJs, Flux, HTML, CSS, Sass, JavaScript",
            "Designed UI/UX elements and pages for in-house web applications",
            "Communicate remotely with team of engineers and business analysts on a daily basis",
          ]}
          value={value}
          index={2}
        />
      </div>
    </section>
  );
}