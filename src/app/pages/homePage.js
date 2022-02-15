import React from 'react';
import styled from 'styled-components';
import DropBtn from '../components/header';
import SearchArea from '../components/SearchArea';
import JokeCartigory from '../components/jokeCartigory';
import Card from '../components/Card';
import Footer from '../components/footer';


const Container = styled.div`

`

function homePage() {
  return (
    <Container>
         <DropBtn />
      <SearchArea />
      <JokeCartigory />
      <Card />
      <Footer />
    </Container>
  )
}

export default homePage