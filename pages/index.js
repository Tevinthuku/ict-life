import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Carousel from '../components/Carousel';
import AnimatedText from '../components/AnimatedText';
import UserSelectedItem from '../components/UserItemsList';

export default function Index() {
  return (
      <Container maxWidth="sm">
          <Box my={4}>
              <AnimatedText text={"Welcome to Amazin, we have all you need, check out our list of items below"} />
              <Carousel />
        </Box>
          <UserSelectedItem />
      </Container>
  );
}
