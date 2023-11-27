import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "./Assets/STUDIO-WICK-01.png"
import LogoImage2 from "./Assets/STUDIO-WICK-02.png"
import { RxHamburgerMenu } from "react-icons/rx";
import MediaQuery from 'react-responsive'
import React, { useState } from "react";

const Header = () => {
    const [Clicked, setClicked] = useState(false)

    const toggleHamburger = () => {
        setClicked(!Clicked)
    }

    console.log(Clicked)


    return(
        <>
        <Top>
            <Left>
                <MediaQuery maxWidth={999}>
                    <Home to="/"><Image src={LogoImage}/></Home>
                </MediaQuery>
                <MediaQuery minWidth={1000}>
                    <Home2 to="/"><Image2 src={LogoImage2}/></Home2>
                </MediaQuery>
            </Left>
            <Right>
                <MediaQuery minWidth={1000}>
                    <Categories to="/about">About</Categories>
                    <Categories to="/services">Services</Categories>
                    <Categories to="/contact">Contact</Categories>
                    <BookNow href="https://www.fresha.com/a/studio-wick-montreal-montreal-1165-rue-ottawa-iga8musl/booking?menu=true" target="_blank">Book Now</BookNow>
                </MediaQuery>
                <MediaQuery maxWidth={999}>
                    <HamburgerMenu>
                        <HamburgerIcon><RxHamburgerMenu onClick={toggleHamburger}/></HamburgerIcon>
                    <ul className={Clicked ? "open" : "closed"}>
                        <CategoriesHamburger to="/about" onClick={toggleHamburger}><li>About</li></CategoriesHamburger>
                        <CategoriesHamburger to="/services" onClick={toggleHamburger}><li>Services</li></CategoriesHamburger>
                        <CategoriesHamburger to="/contact" onClick={toggleHamburger}><li>Contact</li></CategoriesHamburger>
                    </ul>
                    </HamburgerMenu>
                </MediaQuery>
            </Right>
        </Top>
        </>
    )
}

export default Header


const Top = styled.div`
padding: 1rem 2rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color:#212e1a;
//#9FA37F//

`

const Left = styled.div`
display: flex;
align-items: center;
`

const Image = styled.img`
max-width: 8rem;

@media only screen and (max-width: 600px) {
    max-width: 6rem;
}

@media only screen and  (max-width: 350px) {
    max-width: 3.5rem;
}

`
const Image2 = styled.img`
max-width: 14rem;
`


const Right = styled.div`
display: flex;
align-items: center;
`


const Categories = styled(Link)`
position: relative;
margin: 0 0.75rem;
text-decoration: none;
color:#9FA37F;
font-size: clamp(1rem, 2.5vw, 2rem);
transition: ease-in-out 0.3s;

&:hover{
    text-decoration: underline;
    padding-bottom: 0.5rem;
}


`

const Home = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
`

const Home2 = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
`

const BookNow = styled.a`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
color:#212e1a;
font-size: 2rem;
min-height: 3rem;
min-width: 12rem;
padding: 0;
border: none;
background: #9FA37F;
border-radius: 0.5rem;
transition: all 200ms ease-in;
box-sizing: border-box;

&::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}

&:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #212e1a;
}

&:hover{
  color: #212e1a;
  box-shadow: 0 0 5px #212e1a;
  text-shadow: 0 0 5px #212e1a;
}
`

const HamburgerMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 5rem;
color:#9FA37F;


ul.closed {
      display: none;
    }

ul.open {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    text-align: right;
    list-style: none;
    font-size: 2rem;
    position: absolute;
    padding: 0;
    margin: 0;
    transform: translate(10%, 90%);


 }


 li {
        border-radius: 0;
        border-bottom: none;
        justify-content: end;
        font-weight: 600;
        border-radius: 0px;
        border: none;
        padding: 10px 20px 10px;
        background-color: #212e1a;
        font-size: 1rem;
      }


@media only screen and (max-width: 600px) {
    font-size: 4rem;
}

@media only screen and  (max-width: 350px) {
    font-size: 2.5rem;
}

`

const CategoriesHamburger = styled(Link)`
text-decoration: none;
color:white;
`

const HamburgerIcon = styled.div`
display: flex;
&:hover{
    border: 1px solid white;
}
`