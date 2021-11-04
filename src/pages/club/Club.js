import React from 'react';
// import classes from './Club.module.scss';
import GroupCardPage from '../../components/Card/GroupCard/GroupCardPage';
import TabPanel from '../../components/Tabs/TabPanel/TabPanel';
import Tabs from '../../components/Tabs/Tabs';
import About from './Panels/About/About';
import Rules from './Panels/Rules/Rules';
import Discussion from './Panels/Discussion/Discussion';
import Memebers from './Panels/Memebers/Memebers';
import Pending from './Panels/Pending/Pending';
import Settings from './Panels/Settings/Settings';
import CurrentlyReading from './Panels/CurrentlyReading/CurrentlyReading';
import Meetings from './Panels/Meetings/Meetings';
import Polls from './Panels/Polls/Polls';

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
        <TabPanel>
          <Discussion />
        </TabPanel>
        <TabPanel><Polls /></TabPanel>
        <TabPanel><CurrentlyReading/></TabPanel>
        <TabPanel><Meetings/></TabPanel>
        <TabPanel>
          <Rules />
        </TabPanel>
        <TabPanel>
          <Memebers />
        </TabPanel>
        <TabPanel>
          <Pending />
        </TabPanel>
        <TabPanel><Settings /> </TabPanel>
      </Tabs>
    </GroupCardPage>
  );
};

export default club;
