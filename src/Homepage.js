import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Placeholder from "./Assets/Placeholder.jpg"
import Shampoo from "./Assets/istockphoto-1356587396-612x612.jpg"
import MissionStatement from "./MissionStatement";
import InstagramScroller from "./InstagramScroller";



const Homepage = () => {

    return(
        <>
        <CoverImageDiv>
            <Book>
                <BookButton href="https://www.fresha.com/a/studio-wick-montreal-montreal-1165-rue-ottawa-iga8musl" target="_blank">Book Now</BookButton>
                <BookImage src={Shampoo}></BookImage>
            </Book>
            <AboutMe>
                <AboutMeButton to="/about">About Me</AboutMeButton>
                <AboutMeImage src={Placeholder}></AboutMeImage>
            </AboutMe>
        </CoverImageDiv>
        {/* <MissionStatement/>
        <InstagramScroller/> */}
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
width: 100vw;
background-color: #BEAD93;

@media only screen and (max-width: 1400px) {
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
`

const AboutMeImage = styled.img`
height: 500px;
max-width: 700px;
object-fit: fill;

@media only screen and (max-width: 1400px) {
    max-width: 500px;
    height: 300px;
}

@media only screen and (max-width: 600px) {
    max-width: 300px;
    height: 200px;
}


`

const AboutMe = styled.div`
width: 50%;
margin: 0rem 0.5rem;
position: relative;
display: flex;
justify-content: center;
align-items: center;


`

const BookImage = styled.img`
height: 500px;
max-width: 700px;
object-fit: fill;

@media only screen and (max-width: 1400px) {
    max-width: 500px;
    height: 300px;
}

@media only screen and (max-width: 600px) {
    max-width: 300px;
    height: 200px;
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
    border-radius: 5rem;
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
`
