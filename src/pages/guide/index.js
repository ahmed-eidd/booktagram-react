import React from 'react'
import WideCard from '../../components/Card/WideCards/WideCard';
import Layout from '../../components/Layout/Layout';
import { Grid } from "@chakra-ui/react";

const index = () => {
  return (
    <Layout> 
      <Grid gridTemplateColumns='repeat(auto-fit, 72.5rem)' gridRowGap='3rem' justifyContent='center' >

        <WideCard />
        <WideCard />
        <WideCard />
        <WideCard />
        <WideCard />
        <WideCard />
      </Grid>
    </Layout>
  )
}

export default index;
