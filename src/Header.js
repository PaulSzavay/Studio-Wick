import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "./Assets/STUDIO-WICK-01.png"
import LogoImage2 from "./Assets/STUDIO-WICK-02.png"
import { RxHamburgerMenu } from "react-icons/rx";
import MediaQuery from 'react-responsive'

const Header = () => {

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
                    <HamburgerMenu><RxHamburgerMenu /></HamburgerMenu>
                </MediaQuery>
            </Right>
        </Top>
        </>
    )
}

export default Header


const Top = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
height: 10vh;
width: 100%;
background-color:#212e1a;
//#9FA37F//


`

const Left = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: left;
margin-left: 1rem;
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
width: 50%;
display: flex;
justify-content: right;
align-items: center;
color:#9FA37F;
padding: 0 0.75rem 0 0;

`


const Categories = styled(Link)`
    margin: 0 1rem;
    text-decoration: none;
    color:#9FA37F;
    font-size: 2rem;


`

const Home = styled(Link)`
height: 5rem;
max-width: 7rem;
text-decoration: none;
color:white;
display: flex;
align-items: center;
justify-content: center;
`

const Home2 = styled(Link)`
margin-left: 3rem;
height: 5rem;
max-width: 7rem;
text-decoration: none;
color:white;
display: flex;
align-items: center;
justify-content: center;
`

const BookNow = styled.a`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
color:black;
font-size: 2rem;
min-height: 3rem;
min-width: 12rem;
padding: 0;
border: none;
background: white;
border-radius: 0.5rem;
transition: all 200ms ease-in;
box-sizing: border-box;

&:hover{
    background-color: #C6B8AF;
    outline: white 0.2rem solid;
}
`

const Title = styled.h1`
margin: 0;
`

const HamburgerMenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 5rem;
color:#9FA37F;

@media only screen and (max-width: 600px) {
    font-size: 4rem;
}

@media only screen and  (max-width: 350px) {
    font-size: 2.5rem;
}

`