import React from 'react'
import styled from 'styled-components';
import BackgroundImage from '../../assets/assets1/bitmap_2.png';
import ArrowRight from '../../assets/assets1/path-copy.png';

const Container = styled.div`
width: 100%;
height: 10rem;
background-image: url("${BackgroundImage}");
`
const InnerContainer = styled.div`
width: 100%;
height: 100%;
text-align: start;
margin-left: 10%;
`
const Title = styled.h5`
color: #ffffff;
padding-top: 3%;
`
const SubmitJoke = styled.button`
color: #ffffff;
background-color: inherit;
cursor: pointer;
padding: 0.7rem;
align-content: center;
`
const SubmitIcon = styled.img`
margin-left: 8px;
`

function footer() {
  return (
    <Container>
        <InnerContainer>
      <Title>GOT JOKE? GET PAID <br/> FOR SUBMITING</Title>
      <SubmitJoke>SUBMIT JOKE<SubmitIcon src={ArrowRight}/></SubmitJoke>
      </InnerContainer>
    </Container>
  )
}

export default footer