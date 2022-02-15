import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect,useState } from 'react';
import ArrowDown from '../../assets/assets1/path-copy-7.png';
import ArrowRight from '../../assets/assets1/path-copy.png';
import VoltImg from '../../assets/assets1/green-light-copy.png';

const Container = styled.div`
width: 100%;
heigh: 100%;

`
const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: auto;
justify-content: space-evenly;
padding: 0px 3rem;
`
const Cards = styled.div`
width: 20rem;
height: 228px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
:hover{
  border: 0.5px solid #809fff;
  transition: 0.3s;
  cursor:pointer;
}
pointer: cursor;
justify-content: space-evenly;
display: flex;
flex-direction: column;
align-content:start;
margin-bottom: 3rem;
`
const CardContentContainer = styled.div`
width: 100%;
height: 100%;
margin: 0px 10px;

`
const CardHeader = styled.h4`
width: 100%;
text-align: start;
text-transform: uppercase;
color: #262626;
`
const CardBody = styled.p`
width: 90%;
height: auto;
color: black;
font-size: 14px;
text-align: start;
`
const CardStatView = styled.div`
margin-right: 10px;

`
const Stat = styled.p`
align-self: flex-end;
width: auto;
color: #a55b2a;
align-items: center;
margin: 0px 0px 10px 0px;
cursor: pointer;
font-size: 11px;
:hover{
  transition: 0.3s;
}
img{
  width: 17%;
}
`
const JokeType8 = styled.div`
width:12rem;
height: 2rem;
border: 1px solid #a55b2a;
color: #a55b2a;
border-radius: 3px;
padding-top: 0.8rem;
align-items: center;
margin: 0px auto 2rem auto;
`

const Arrow = styled.img`
margin-left: 10px;
`
const ViewMore = styled.div`
margin: 10px auto;
cursor: pointer;
`

const VoltIcon = styled.img`
margin-right: 2%;
`

function Card() {

   useEffect (() => {
getChuckJoke();

   }, []);

    const [chuckjoke, setChuckJoke] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(6);
    const getChuckJoke = async () => {
      try {
        const res = await axios.get("https://api.chucknorris.io/jokes/search?query=all");
      setChuckJoke(res.data.result);
      setLoading(true);
      //console.log(res.data.result);
      }catch(err) {
        alert(err.message);
      }
    }

    const showMoreItems = () => {
      setVisible((prevValue) => prevValue = 1465)
    }
    
    return (
    <Container>
      < CardContainer>
      {loading && chuckjoke.slice(0, visible).map((joke) => ( 
      <Cards key={joke.id}>
    <CardContentContainer >
    {joke.categories.length <=0 ? <CardHeader><VoltIcon  src={VoltImg}/>Uncategorized</CardHeader> :
    <CardHeader><VoltIcon  src={VoltImg}/>{joke.categories}</CardHeader>  } 
     <CardBody>{joke.value}</CardBody>
     </CardContentContainer>
     <Stat>
     <CardStatView>SEE STATS<Arrow src={ArrowRight}/></CardStatView>
     </Stat>
      </Cards>
      ))}
      </CardContainer>
      <ViewMore>
      <JokeType8 onClick={showMoreItems}>VIEW MORE <Arrow src={ArrowDown}/> </JokeType8>
      </ViewMore>
    </Container>
  )
}

export default Card