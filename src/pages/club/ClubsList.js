import { Grid } from '@chakra-ui/layout';
import React from 'react';
import GroupCard from '../../components/Card/GroupCard/GroupCard';

const index = () => {
  return (

      <Grid rowGap='6rem' templateColumns="repeat(auto-fit, 26rem)" justifyContent="center">
        
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </Grid>
 
  );
};

export default index;
