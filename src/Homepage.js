import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Placeholder from "./Assets/Placeholder.jpg"
import Shampoo from "./Assets/istockphoto-1356587396-612x612.jpg"
import MissionStatement from "./MissionStatement";
import InstagramScroller from "./InstagramScroller";
import MediaQuery from 'react-responsive';



const Homepage = () => {

    return(
        <>
        <CoverImageDiv>
                <Book>
                    <BookButton className="button" href="https://www.fresha.com/a/studio-wick-montreal-montreal-1165-rue-ottawa-iga8musl" target="_blank">Book Now</BookButton>
                    <a href="https://www.fresha.com/a/studio-wick-montreal-montreal-1165-rue-ottawa-iga8musl" target="_blank">
                    <BookImage src={Shampoo}></BookImage>
                    </a>
                </Book>
                <AboutMe>
                    <AboutMeButton className="button2" to="/about">About Me</AboutMeButton>
                    <Link to="/about">
                    <AboutMeImage src={Placeholder}></AboutMeImage>
                    </Link>
                </AboutMe>
        </CoverImageDiv>
        <MissionStatement/>
        {/* <InstagramScroller/> */}
        </>
    )
}

export default Homepage



const CoverImageDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #F6F6F6;
padding: 13rem 0;
/* background color:#BEAD93 */

@media only screen and  (max-width: 1400px) {
    padding: 12rem 0;
    flex-direction: column;
}
`

const Book = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
max-width: 700px;


&:hover{
    .button{
    background-color:#BEAD93;
    }
}


@media only screen and  (max-width: 1400px) {
    width: 80%;
    margin-bottom: 2rem;
}

@media only screen and  (max-width: 350px) {
    width: 70%;
}
`
const AboutMe = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
max-width: 700px;



&:hover{
    .button2{
    background-color:#BEAD93;
    }
}


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
height: 400px;
max-width: 600px;
object-fit: fill;
padding: 0 0.75rem;

@media only screen and  (max-width: 1400px) {
    min-width: 500px;
    height: 300px;
}

@media only screen and  (max-width: 600px) {
    min-width: 350px;
    height: 220px;
}

@media only screen and  (max-width: 350px) {
    min-width: 200px;
    height: 125px;
}
`


const AboutMeImage = styled.img`
height: 400px;
max-width: 600px;
object-fit: fill;
padding: 0 0.75rem;

@media only screen and  (max-width: 1400px) {
    max-width: 500px;
    height: 300px;
}

@media only screen and  (max-width: 600px) {
    max-width: 350px;
    height: 220px;
}

@media only screen and  (max-width: 350px) {
    max-width: 200px;
    height: 125px;
}
`



