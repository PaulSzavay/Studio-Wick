import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "./Assets/Logo.JPG"

const Header = () => {

    return(
        <>
        <Top>
            <Left>
            <Home to="/"><Image src={LogoImage}/></Home>
                <Home to="/">
                <Title>Studio Wick</Title> 
                </Home>   
            </Left>
            <Right>
                <Categories>Services</Categories>
                <Categories to="/about">About</Categories>
                <Categories>Contact</Categories>
                <BookNow href="https://www.fresha.com/a/studio-wick-montreal-montreal-1165-rue-ottawa-iga8musl/booking?menu=true" target="_blank">Book Now</BookNow>
            </Right>
        </Top>
        </>
    )
}

export default Header


const Top = styled.div`
display: flex;
background-color: #212e1a;
justify-content: space-evenly;
width: 100%;
height: 10vh;
`

const Left = styled.div`
width: 50%;
display: flex;
justify-content: left;
color:white;
font-size: 2rem;
`

const Image = styled.img`
max-width: 4rem;
`


const Right = styled.div`
width: 50%;
display: flex;
justify-content: right;
align-items: center;
color:white;
margin-right: 0.5rem;
`


const Categories = styled(Link)`
    margin: 0 1rem;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
`

const Home = styled(Link)`
margin: 0.5rem 0 0.5rem 1.5rem;
height: 5rem;
text-decoration: none;
color:white;
display: flex;
align-items: center;
justify-content: center;
`

const BookNow = styled.a`
display: flex;
justify-content: center;
text-decoration: none;
color:black;
font-size: 2rem;
min-height: 3rem;
width: 14rem;
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