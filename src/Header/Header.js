import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../Assets/STUDIO-WICK-01.png"
import LogoImage2 from "../Assets/STUDIO-WICK-02.png"
import { RxHamburgerMenu } from "react-icons/rx";
import MediaQuery from 'react-responsive'
import React, { useState } from "react";
import Nav from "./Nav";
import Burger from "./Burger";

const Header = () => {
    const [Clicked, setClicked] = useState(false)

    const toggleHamburger = () => {
        setClicked(!Clicked)
    }

    console.log(Clicked)


    return(
        <>
        <Top>
                <MediaQuery maxWidth={1000}>
                    <Home to="/"><Image src={LogoImage}/></Home>
                </MediaQuery>
                <MediaQuery minWidth={1001}>
                    <Home2 to="/"><Image2 src={LogoImage2}/></Home2>
                </MediaQuery>

                <Burger/>
        </Top>
        </>
    )
}

export default Header


const Top = styled.div`
position:fixed;
width: 100vw;
padding: 0.5rem 2rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color:#212e1a;
z-index: 50;
//#9FA37F//

`



const Image = styled.img`
max-width: 5rem;

@media only screen and (max-width: 600px) {
    max-width: 5rem;
}

@media only screen and  (max-width: 350px) {
    max-width: 3.5rem;
}

`
const Image2 = styled.img`
max-width: 10rem;
`





const Home = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
height: 80%;
`

const Home2 = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
`

