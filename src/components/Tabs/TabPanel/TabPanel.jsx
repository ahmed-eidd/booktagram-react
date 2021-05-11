import React from 'react';
import classes from './TabPanel.module.scss';
import { TabPanel as CTabPanel } from '@chakra-ui/react';

const TabPanel = ({ children, ...props }) => {
  return <CTabPanel {...props}>{children}</CTabPanel>;
  // return <div>{children}</div>;
};

export default TabPanel;
