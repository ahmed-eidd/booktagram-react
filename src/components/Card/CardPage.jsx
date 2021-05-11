import React, { useState } from 'react';
import classes from './CardPage.module.scss';
import Img from '../../assests/news/Background.jpg';
import {useHistory} from 'react-router-dom'

// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Tabs from '../Tabs/Tabs';

const CardPage = () => {
  const tabs = ['Speakers', 'Details', 'Orgnaizer'];
  const tabSelected = {
    opacity: '100% !important',
    boxShadow: '0 !important',
    borderBottom: '1px solid #21545F',
    outline: 'none',
  };

  const history = useHistory();
  const backBtnHandler = () => {
    history.goBack();
  };

  return (
    <div className={classes.CardPage}>
      <p className={classes.BackBtn}>
        <i className="fas fa-angle-left"></i>
        <span onClick={backBtnHandler}>Back</span> to search Results
      </p>
      <div className={classes.MainSection}>
        <div className={classes.ImgContainer}>
          <img
            src={Img}
          />
        </div>
        <div className={classes.TextContainer}>
          <h3>Title</h3>
          <div className={classes.TextInfo}>
            <h5>
              <i class="fas fa-clock" style={{ marginRight: '.3rem' }}></i> Date
            </h5>
            <p>Thu, Mar 11, 2021 5:00 PM – 6:00 PM</p>
          </div>
          <div className={classes.TextInfo}>
            <h5>
              <i class="fas fa-map-marker-alt"></i>Location
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div className={classes.TextInfo}>
            <h5>
              <i class="fas fa-link"></i>Online Links
            </h5>
            <div>
              <i class="fab fa-youtube"></i> <i class="fas fa-video"></i>
            </div>
          </div>
        </div>
      </div>
      <Tabs tabs={['Speakers', 'Details', 'Orgnaizer']} />
      {/* <Tabs variant="unstyled" className={classes.Tabs}>
        <TabList>
          {tabs.map((el) => (
            <Tab _selected={tabSelected} className={classes.Tab}>
              {el}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </div>
  );
};

export default CardPage;
