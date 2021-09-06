import React from 'react';
import BookCover from '../../components/BookCover/BookCover';
import cover from '../../assests/bookcover.jpg';
import { Grid } from '@chakra-ui/react'

const ShopList = () => {
  return (
    <Grid gridTemplateColumns='repeat(auto-fit, 23rem)' gridRowGap='3rem' justifyContent='center' justifyItems='center'>
      <BookCover hoverOn cover={cover} date='April 2021' location='Nasr City' title='Rich Dad, Poor Dad' author='Ahmed Eid' price='3.99$' />
      <BookCover hoverOn cover={cover} date='April 2021' location='Nasr City' title='Rich Dad, Poor Dad' author='Ahmed Eid' price='3.99$' />
      <BookCover hoverOn cover={cover} date='April 2021' location='Nasr City' title='Rich Dad, Poor Dad' author='Ahmed Eid' price='3.99$' />
      <BookCover hoverOn cover={cover} date='April 2021' location='Nasr City' title='Rich Dad, Poor Dad' author='Ahmed Eid' price='3.99$' />
      <BookCover hoverOn cover={cover} date='April 2021' location='Nasr City' title='Rich Dad, Poor Dad' author='Ahmed Eid' price='3.99$' />
      <BookCover hoverOn cover={cover} date='April 2021' location='Nasr City' title='Rich Dad, Poor Dad' author='Ahmed Eid' price='3.99$' />
      <BookCover hoverOn cover={cover} date='April 2021' location='Nasr City' title='Rich Dad, Poor Dad' author='Ahmed Eid' price='3.99$' />
      <BookCover hoverOn cover={cover} date='April 2021' location='Nasr City' title='Rich Dad, Poor Dad' author='Ahmed Eid' price='3.99$' />
      <BookCover hoverOn cover={cover} date='April 2021' location='Nasr City' title='Rich Dad, Poor Dad' author='Ahmed Eid' price='3.99$' />
    </Grid>
  )
}

export default ShopList
