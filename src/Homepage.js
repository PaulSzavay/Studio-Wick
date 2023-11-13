import { styled } from "styled-components";
import Placeholder from "./Assets/Placeholder.jpg"
import Shampoo from "./Assets/istockphoto-1356587396-612x612.jpg"



const Homepage = () => {

    return(
        <>
        <CoverImageDiv>
            <Book>
                <BookButton>Book Now!</BookButton>
                <BookImage src={Placeholder}></BookImage>
            </Book>
            <AboutMe>
                <AboutMeButton>About Me</AboutMeButton>
                <AboutMeImage src={Shampoo}></AboutMeImage>
            </AboutMe>
        </CoverImageDiv>


        </>
    )
}

export default Homepage

const CoverImageDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
width: 100vw;

`

const Book = styled.div`
width: 700px;
margin: 0rem 1rem;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const BookImage = styled.img`
max-height: 500px;
object-fit: contain;

`

const AboutMe = styled.div`
width: 700px;
margin: 0rem 1rem;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const AboutMeImage = styled.img`
min-height: 500px;
object-fit: cover;
`

const BookButton = styled.button`
position:absolute;
border: none;
height: 3rem;
width: 12rem;
font-size: 2rem;
border-radius: 5rem;
background-color: white;


&:hover{
    background-color: orange;
    border-radius: 5rem;
}
`

const AboutMeButton = styled.button`
position:absolute;
border: none;
height: 3rem;
width: 12rem;
font-size: 2rem;
border-radius: 5rem;
background-color: white;


&:hover{
    background-color: orange;
    border-radius: 5rem;
}
`
