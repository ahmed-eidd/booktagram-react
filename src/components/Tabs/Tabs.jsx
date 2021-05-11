import React from 'react';
import {
  Tabs as CTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import classes from './Tabs.module.scss';

const Tabs = ({tabs = [], className = '', children}) => {
  // const tabs = ['Speakers', 'Details', 'Orgnaizer'];
  // console.log('tabs', children)
  const tabSelected = {
    opacity: '100% !important',
    boxShadow: '0 !important',
    borderBottom: '1px solid #21545F',
    outline: 'none',
  };
  return (
    <CTabs  variant="unstyled" className={[classes.Tabs, className].join(' ')}>
      <TabList>
        {tabs?.map((el) => (
          <Tab _selected={tabSelected} className={classes.Tab}>
            {el}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
      {children}
      </TabPanels>
    </CTabs>
  );
};

export default Tabs;
