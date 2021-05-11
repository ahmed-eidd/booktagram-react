import React from 'react';

import Button from '../../Button/Button';
import { Grid } from '@chakra-ui/layout';
import classes from './GroupCardPage.module.scss';
import Tabs from '../../Tabs/Tabs';
import TabPanel from '../../Tabs/TabPanel/TabPanel';
import Img from '../../../assests/news/Background.jpg';
import ProfileImg from '../../../assests/news/test.png';
// import { TabPanel } from '@chakra-ui/react';

const GroupCardPage = () => {
  return (
    <Grid templateColumns="1fr repeat(8,minmax(min-content, 10rem)) 1fr">
      <div className={classes.BgImgContainer}>
        <img
          src={Img}
        />
      </div>
      <div className={classes.ClubImgContainer}>
        <img src={ProfileImg} />
      
      </div>
      <div className={classes.TextContainer}>
        <h3>Lorem Ipsum Book Club</h3>
        <div className={classes.IconsContainer}>
          <div>
            <i className="fas fa-users"></i>888 memebers
          </div>
          <div className={classes.Divider}></div>
          <div>
            <i className="fas fa-globe-africa"></i>Public Group
          </div>
        </div>
      </div>
      <Button className={classes.JoinBtn}>Join This Club</Button>
      {/* <div className={classes.Tabs}>Tabs</div> */}
      <Tabs
        tabs={['Discussion', 'Currently reading', 'Rules']}
        className={classes.Tabs}
      >
        <TabPanel>One</TabPanel>
        <TabPanel>Two</TabPanel>
        <TabPanel>Three</TabPanel>
      </Tabs>
    </Grid>
  );
};

export default GroupCardPage;