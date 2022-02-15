import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; 
import ArrowDown from '../../assets/assets1/path-copy-7.png';
import VoltImgBlue from '../../assets/assets2/blue-light.png';
import axios from 'axios';



const Container = styled.div`
width: 100%;
height: auto;
`
const InnerContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 5% 9%;
height: auto;
width: auto;
@media (max-width: 900px){
  justify-content: center;
}
@media (min-width: 901px){
  justify-content: start;
}
`
const JokeType = styled.p`
width:10rem;
height: 2rem;
background-color: #F08080;
color: #ffffff;
border-radius: 3px;
padding-top: 0.8rem;
margin: 5px 10px;
cursor: pointer;
[data-status="true"] {
  background: 'red'
}
`
const JokeTypeContainer = styled.div`

`


const ViewAllCategories = styled.div`
width:10rem;
height: 2rem;
border: 1px solid #a55b2a;
color: #a55b2a;
border-radius: 3px;
padding-top: 0.8rem;
margin: 5px 10px;
cursor: pointer;
`
const Arrow = styled.img`
margin-right: -30px;
margin-left: 20px;;
`
const SocialJokeContainer = styled.div`
width: 100%;
height: auto;
justify-content: start;
margin: 20px 9.5%;
`
const SocialJoke = styled.div`
text-align: center;
color: #ffffff; 
background-color: #7CFC00 ;
width: 5rem;
border-radius: 10px;
font-size: 11px;
padding: 2px;
`
const VoltIcon = styled.img`
margin-right: 10%;
`


function JokeCartigory() {

  useEffect (() => {
    getChucjJokeCat();
    
       }, []);
    
        const [chuckjokeCat, setChuckJokeCat] = useState([]);
       // const [loading, setLoading] = useState(false);
        const [visible, setVisible] = useState(8);
       
        
        const getChucjJokeCat = async () => {
          try {
            const res = await axios.get("https://api.chucknorris.io/jokes/categories");
          setChuckJokeCat(res.data);
         // setLoading(true);
          console.log(res.data);
          }catch(err) {
            alert(err.message);
          }
        }
        const showMoreItems = () => {
          setVisible((prevValue) => prevValue = 16)
    
        }
        
       
  return (
   
    <Container>
   
     <InnerContainer> 
     { chuckjokeCat.slice(0, visible).map((joke) => ( 
    <JokeTypeContainer>
     <JokeType style={{}}><VoltIcon  src={VoltImgBlue}/>{joke.toUpperCase()}</JokeType> 
    </JokeTypeContainer>
    ))} 

     <ViewAllCategories onClick={showMoreItems}>VIEW All <Arrow src={ArrowDown}/> </ViewAllCategories>
  
    </InnerContainer>
     <SocialJokeContainer>
     <SocialJoke>SOCIAL JOKE</SocialJoke>
     </SocialJokeContainer>
    </Container>
    

   
  )
}

export default JokeCartigory