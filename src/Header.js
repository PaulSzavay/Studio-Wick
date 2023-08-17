import { styled } from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "./Assets/Logo.JPG"

const Header = () => {

    return(
        <>
        <Top>
            <Left>
                <Home to="/"><Image src={LogoImage}/></Home>
            </Left>
            <Middle>
                <Home to="/">
                <Title>Studio Wick</Title> 
                </Home>   
            </Middle>
            <Right>
                <BookNow>Book Now</BookNow>
            </Right>
        </Top>
        <Bottom>
            <Categories>Home</Categories>
            <Categories>About</Categories>
            <Categories>Philosophy</Categories>
            <Categories>Services</Categories>
            <Categories>Contact</Categories>
        </Bottom>
        </>
    )
}

export default Header


const Top = styled.div`
display: flex;

background-color: black;
justify-content: space-evenly;
width: 100%;
`

const Left = styled.div`
width:33%;
display: flex;
justify-content: center;

`

const Middle = styled.div`
width: 33%;
display: flex;
justify-content: center;
align-items: center;
color:white;
font-size: 2rem;
`

const Right = styled.div`
width: 33%;
display: flex;
justify-content: center;
align-items: center;
color:white;

`

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    border-bottom: solid black 0.1rem;
`



const Categories = styled(Link)`
    margin: 0 1rem;
    text-decoration: none;
    color: black;
`

const Home = styled(Link)`
height: 5rem;
text-decoration: none;
color:white;
`

const Image = styled.img`
max-width: 5rem;
`

const BookNow = styled(Link)`
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

&:hover{
    background-color: lightblue;
    outline: white 0.2rem solid;
}
`

const Title = styled.h1`
margin: 0;
`