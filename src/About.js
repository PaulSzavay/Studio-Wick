import { styled } from "styled-components";
import Steph from "./Assets/StockSteph2.JPG"


const About = () => {

    return(
        <>
        <AboutSection>
            <PhotoDiv>
            <WickPhoto src={Steph}/>
            </PhotoDiv>
            <AboutText>
                <AboutTitle>Who are we?</AboutTitle>
                <AboutDescription>At StudioWick, we are dedicated to redefining beauty standards and fostering inclusivity. We believe in a world where haircuts have no gender, where strong women are celebrated, and where every individual feels safe, confident, and comfortable in their own skin. Our mission is to empower and uplift, creating a space where authenticity thrives, and self-expression knows no bounds.</AboutDescription>
            </AboutText>
        </AboutSection>

        </>
    )
}

export default About


const AboutSection = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
max-width: 100%;
height: 79.75vh;
background-color: #eef6ed;
box-sizing: border-box;
`

const PhotoDiv = styled.div`
display: flex;
justify-content: end;
align-items: center;
width: 50%;
max-height: 75vh;
margin: 1rem;
`

const WickPhoto = styled.img`
object-fit: contain;

`

const AboutText = styled.div`
width: 50%;
display: flex;
flex-direction: column;
`

const AboutTitle = styled.h1`
font-size: 3rem;
`

const AboutDescription = styled.p`
width: 45rem;
font-size: 1.5rem;
`

