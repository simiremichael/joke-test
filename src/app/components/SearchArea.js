import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../assets/assets1/bitmap.png';
import SearchCopy from '../../assets/assets1/search-copy.png';
import VoltImg from '../../assets/assets1/green-light-copy.png';



const Container = styled.div`
width: 100%;
height: 20rem;
background-image: url("${BackgroundImage}");
margih-rop
`
const InnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items; center;
`

const Title = styled.h1`
color: #ffffff;
font-family: sans-serif;
margin-bottom: 0;
margin-top: 2rem;
@media (max-width: 600px) {
}
@media (min-width: 601px) {
  font-size: 50px;
}
`

const Paragraph = styled.p`
color: #ffffff;
margin-top:0;
font-family: sans-serif;
@media (min-width: 400px) {

}
@media (min-width: 401px) {
  font-size: 19px;
}
@media (min-width: 601px) {
  font-size: 25px;
}

`
const Inputs = styled.input`
padding: 0.6rem;
align-self: center;
`
const SearchContainer = styled.div`
margin: 0px 35%;
height: auto;
align-items: center;
width: 100%;
float: left;
::after {
  content: "";
  clear: both;
  display: table;
}
[type=text] {
  font-size: 17px;
  float: left;
  width: 30%;
background: none;
border: 1px solid white;
border-right: none;
color: #ffffff;
font-size: 20px;
::placeholder{
  font-size: 0.9rem;
  text-align: start;
}
}
`
const SearchIcon = styled.img`
background-color: inherit;
background-blend-mode: multiply;
display: grid;
width: 1.2rem;
place-items: center;
align-self: center;
`
const Button = styled.div`
float: left;
width: 2rem;
padding: 0.7rem;
background-color: inherit;
border: 1px solid white;
border-left: none;
justify-content: center;
cursor: pointer
`
const VoltIcon = styled.img`
margin-right: 10%;
margin-left: 0.8rem;
`
const SearchAllContainer = styled.div`
background-color: white;
width: 30%;
align-self: center;
margin: 10px auto;
display: flex;
flex-direction: column;
overflow: hidden;
overflow-y: auto;
`
const SearchResult = styled.div`
width: 100%;
align-self: center;

`
const SearchResultContainer = styled.div`
display: flex;
background-color: white;
width: 400px;
height: 200px
margin-top: 5rem;
box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
:hover{
  background-color: lightgray;
}
`
const SearchResultItems = styled.a`
color: #808080;
display: flex;
padding: 5px;
cursor: pointer;
margin-right: 5px;

`


function SearchArea() {

  useEffect (() => {
    getChucjJoke();
    
       }, []);
    
        const [chuckjoke, setChuckJoke] = useState([]);
        //const [loading, setLoading] = useState(false);
    const [filterData, setFilterData] = useState([]);
    
   

    
        const getChucjJoke = async () => {
          try {
            const res = await axios.get("https://api.chucknorris.io/jokes/search?query=all");
          setChuckJoke(res.data.result);
        //  setLoading(true);
         // console.log(res.data.result);
          }catch(err) {
            alert(err.message);
          }
        }
        const handleFilter = (event) => {
          const searchWord = event.target.value;
          const newFilter =  chuckjoke.filter((joke) => {
            return joke.value.toLowerCase().includes(searchWord.toLowerCase());
          });
          if (searchWord ==="" ) {
            setFilterData([]);
          } else {
          setFilterData(newFilter);
          }
        };
    

  return (
    <Container >
       
    <InnerContainer>
    <Title>The Joke Bible</Title>
    <Paragraph>Daily Laughs for you and yours</Paragraph>
    <SearchContainer>
    <Inputs type='text' placeholder='How can  we make you laugh?' onChange={handleFilter} />
    <Button><SearchIcon src={SearchCopy}/></Button>
    </SearchContainer>
    { filterData.length !==0 && (
   <SearchAllContainer>
  
    { filterData.map((joke) => (
     
       <SearchResult key={joke.id}>
       
         <SearchResultContainer>
         {joke.categories.length <=0 ? 
    <SearchResultItems><VoltIcon  src={VoltImg}/>Uncategorized:</SearchResultItems> :
    <SearchResultItems><VoltIcon  src={VoltImg}/>{joke.categories}:</SearchResultItems>
         }
         
    <SearchResultItems>{joke.value.slice(0, 30)}...</SearchResultItems>
    </SearchResultContainer>
      
    </SearchResult>
    ))}
    
   </SearchAllContainer>
   )}
    </InnerContainer>
        </Container>
  )
}

export default SearchArea