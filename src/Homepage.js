import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Placeholder from "./Assets/Wick1.jpg"
import Shampoo from "./Assets/Wick2.jpg"
import MissionStatement from "./MissionStatement";




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
                    <AboutMeButton className="button2" to="/about">About</AboutMeButton>
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
padding: 10rem 0;
/* background color:#BEAD93 */

@media only screen and  (max-width: 1400px) {
    padding: 5.5rem 0;
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


@media only screen and  (max-width: 600px) {
padding-bottom: 1rem;
}

@media only screen and  (max-width: 350px) {

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


@media only screen and  (max-width: 1300px) {

}

@media only screen and  (max-width: 350px) {

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
max-width: 500px;
object-fit: fill;
padding: 0 0.75rem;

@media only screen and  (max-width: 1300px) {
    max-width: 325px;

}

@media only screen and  (max-width: 600px) {

}

@media only screen and  (max-width: 350px) {

}
`


const AboutMeImage = styled.img`
max-width: 500px;
object-fit: fill;
padding: 0 0.75rem;

@media only screen and  (max-width: 1300px) {
    max-width: 325px;
}

@media only screen and  (max-width: 600px) {


}

@media only screen and  (max-width: 350px) {

}
`



