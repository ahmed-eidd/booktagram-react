import React from 'react';
import classes from './Club.module.scss';
import GroupCardPage from '../../components/Card/GroupCard/GroupCardPage';
import TabPanel from '../../components/Tabs/TabPanel/TabPanel';
import Tabs from '../../components/Tabs/Tabs';
import About from './Panels/About/About';
import Rules from './Panels/Rules/Rules';

const club = () => {
  const tabs = [
    'About',
    'Discussion',
    'Polls',
    'Currnetly Reading',
    'Meetings',
    'Rules',
    'Memebers',
    'Pending',
    'Settings',
  ];
  return (
    <GroupCardPage>
      <Tabs tabs={tabs}>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>Discussion</TabPanel>
        <TabPanel>Polls</TabPanel>
        <TabPanel>Currnetly Reading</TabPanel>
        <TabPanel>Meetings</TabPanel>
        <TabPanel >
          <Rules />
        </TabPanel>
        <TabPanel>Memebers</TabPanel>
        <TabPanel>Pending</TabPanel>
        <TabPanel>Settings</TabPanel>
      </Tabs>
    </GroupCardPage>
  );
};

export default club;
