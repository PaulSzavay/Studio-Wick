import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Placeholder from "./Assets/Placeholder.jpg"
import Shampoo from "./Assets/istockphoto-1356587396-612x612.jpg"
import MissionStatement from "./MissionStatement";
import InstagramScroller from "./InstagramScroller";
import MediaQuery from 'react-responsive'



const Homepage = () => {

    return(
        <>
        <CoverImageDiv>
            <Book href="https://www.fresha.com/a/studio-wick-montreal-montreal-1165-rue-ottawa-iga8musl" target="_blank">
                <BookButton href="https://www.fresha.com/a/studio-wick-montreal-montreal-1165-rue-ottawa-iga8musl" target="_blank">Book Now</BookButton>
                <BookImage src={Shampoo}></BookImage>
            </Book>
            <AboutMe>
                <AboutMeButton to="/about">About Me</AboutMeButton>
                <AboutMeImage src={Placeholder}></AboutMeImage>
            </AboutMe>
        </CoverImageDiv>
        <MissionStatement/>
        <InstagramScroller/>
        </>
    )
}

export default Homepage



const CoverImageDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 80vh;
width: 100%;
background-color: #BEAD93;

@media only screen and  (max-width: 1400px) {
    flex-direction: column;
}
`

const Book = styled.div`
width: 50%;
margin: 0rem 0.5rem;
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;



@media only screen and  (max-width: 1400px) {
    width: 80%;
}

@media only screen and  (max-width: 350px) {
    width: 70%;
}
`
const AboutMe = styled.div`
width: 50%;
margin: 0rem 0.5rem;
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;



@media only screen and  (max-width: 1400px) {
    width: 80%;
}

@media only screen and  (max-width: 350px) {
    width: 70%;
}

`


const BookButton = styled.a`
position:absolute;
border: none;
height: 4rem;
width: 12rem;
font-size: 2rem;
border-radius: 5rem;
background-color: white;
color:black;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;


&:hover{
    background-color: orange;
}

& ${Book}:hover{
        background-color: greenyellow;
        color: black;
    }

@media only screen and (max-width: 600px) {
    height: 3rem;
    width: 10rem;
    font-size: 1rem;
}

@media only screen and  (max-width: 350px) {
    height: 2rem;
    width: 8rem;
    font-size: 1rem;
}
`

const AboutMeButton = styled(Link)`
position:absolute;
border: none;
height: 4rem;
width: 12rem;
font-size: 2rem;
border-radius: 5rem;
background-color: white;
color:black;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;


&:hover{
    background-color: orange;
    border-radius: 5rem;
}

@media only screen and  (max-width: 600px) {
    height: 3rem;
    width: 10rem;
    font-size: 1rem;
}

@media only screen and  (max-width: 350px) {
    height: 2rem;
    width: 8rem;
    font-size: 1rem;
}
`

const BookImage = styled.img`
height: 500px;
max-width: 700px;
object-fit: fill;

@media only screen and  (max-width: 1400px) {
    min-width: 500px;
    height: 300px;
}

@media only screen and  (max-width: 600px) {
    min-width: 300px;
    height: 200px;
}

@media only screen and  (max-width: 350px) {
    min-width: 200px;
    height: 125px;
}
`


const AboutMeImage = styled.img`
height: 500px;
max-width: 700px;
object-fit: fill;

@media only screen and  (max-width: 1400px) {
    max-width: 500px;
    height: 300px;
}

@media only screen and  (max-width: 600px) {
    max-width: 300px;
    height: 200px;
}

@media only screen and  (max-width: 350px) {
    max-width: 200px;
    height: 125px;
}
`



