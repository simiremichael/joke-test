import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const NavBarContainer = styled.div`
width: 100%;
height: 3rem;
font-family: sans-serif;
background-color: #333333;
padding-bottom: 1px solid ;
`
const InnerNavBarContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: end;
@media only screen and (max-width: 801px) { 
  display: none
}
`
const NavItems = styled.a`
color: #ffffff;
@media (max-width: 300px) {
  margin-right: 1.1rem;
  font-size: 0.5rem;
}
@media (min-width: 600px) {
  margin-right: 1.3rem;
  font-size: 0.7rem;
}
  @media (min-width: 601px) {
    margin-right: 5rem;
    font-size: 0.9rem;
  }

`

const DropDownContent = styled.select`
align-items: center;
padding: 3px;
  background-color: #ffa500;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
   height: 100%;
   color: #ffffff;
   @media (max-width: 300px) {
    margin-right: 1.5rem;
    font-size: 0.5rem;
  }
   @media (min-width: 600px) {
    margin-right: 2rem;
    font-size: 0.7rem;
  }
    @media (min-width: 601px) {
      margin-right: 8rem;
      min-width: 160px;
    }
  `
  const BurgerDropDownContent = styled.select`
align-items: center;
padding: 3px;
  background-color: #ffa500;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
   height: 2rem;
   color: #ffffff;
    font-size: 0.7rem;
    margin-top: 1rem;
    
  `
const DropDownItems = styled.option`
margin-top: 20px;
color: #A88F00;
font-size: 16px;
float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  text-align: left;
  color: #5a5a5a;
  background-color: #ffffff;
    padding: 1px solid #dcdcdc;
  :first-child {
    display:none; 
 }
`
const Button = styled.button`
@media only screen and (min-width: 801px) { 
  display: none;
}
align-self: end;
  margin: 13px 0px 0px 80%;
`
const CancelButton = styled.button`
@media only screen and (min-width: 801px) { 
  display: none;
}
`

const BurgerNav = styled.div`
height: 15em;
align-items: center;
padding-top: 10px;
width: 40%;
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: #5a5a5a;
display: flex;
flex-direction: column;
@media only screen and (min-width: 801px) { 
  display: none;

`
const NavItemss= styled.a`
margin-top: 20px;
color: #ffffff;
@media (max-width: 600px) {
  margin-right: 1.3rem;
  font-size: 0.7rem;
}
 
`
const MenuIcon = styled(FontAwesomeIcon)`
cursor: pointer;

`



function DropBtn () {

    
  const [toggleMenu, setToggleMenu] = useState(false)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
  setToggleMenu(!toggleMenu)
}


useEffect (() => {
const changeWidth = () => {
setScreenWidth(window.innerWidth);
}
window.addEventListener('resize', changeWidth)

return () => {
window.removeEventListener('resize', changeWidth)
}

}, [])
    
  return (
    <NavBarContainer>
      <InnerNavBarContainer>
         <NavItems>SO FUNKTIONIERTS</NavItems>
         <NavItems>SONDERANGEBOTE</NavItems>
         <DropDownContent>
            <DropDownItems> MEIN BEREICH</DropDownItems>
          <DropDownItems>My public joke</DropDownItems>  
           < DropDownItems>My saved joke</DropDownItems> 
           < DropDownItems>Account information</DropDownItems> 
           < DropDownItems> Publish new joke</DropDownItems>  
           </DropDownContent>
          
         </InnerNavBarContainer> 
         <Button onClick={toggleNav}><MenuIcon icon={faBars} size="sm"  /></Button>
     
      {(toggleMenu || screenWidth > 800) && (
<BurgerNav>
<CancelButton onClick={toggleNav}><MenuIcon icon={faWindowClose} size="sm"  /></CancelButton>
         <NavItemss>SO FUNKTIONIERTS</NavItemss>
         <NavItemss>SONDERANGEBOTE</NavItemss>
         <BurgerDropDownContent>
            <DropDownItems> MEIN BEREICH</DropDownItems>
          <DropDownItems>My public joke</DropDownItems>  
           < DropDownItems>My saved joke</DropDownItems> 
           < DropDownItems>Account information</DropDownItems> 
           < DropDownItems> Publish new joke</DropDownItems>  
           </BurgerDropDownContent>
         </BurgerNav>
           )} 
       
</NavBarContainer>
  )
}

export default DropBtn