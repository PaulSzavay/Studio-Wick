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
                <AboutTitle>Who is Steff?</AboutTitle>
                <AboutDescriptionTop>Steff always wanted to be a hairstylist. Graduating from Algonquin College in Hairstyling, Steff spent the first 6 years of her career in Ottawa. In 2021, she moved back home to Montreal, and in 2023, opened StudioWick. Steff specializes in precision cutting and takes a lot of pride in it. She also has a passion for highlighting and big colour transformations.</AboutDescriptionTop>
                <AboutDescription>Steff is motivated by challenging society's beauty standards, and strives to create an environment where people don't have to conform to a specific image. She believes in listening to her clients and offering her opinions in a way that complements their desires.</AboutDescription>
                <AboutDescription>When clients visit StudioWick, they can expect a safe space where they can truly be themselves. Steff is dedicated to listening, understanding, and making your hair goals a reality. She aims to provide an atmosphere that fosters a sense of comfort and belonging.</AboutDescription>
            </AboutText>
        </AboutSection>

        </>
    )
}

export default About


const AboutSection = styled.section`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
max-width: 100%;
height: 80vh;
background-color: #eef6ed;
box-sizing: border-box;
`

const PhotoDiv = styled.div`
display: flex;
justify-content: end;
align-items: center;
width: 50%;
padding: 1rem;
`

const WickPhoto = styled.img`
object-fit: contain;
height: 65vh;
`

const AboutText = styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding-left: 3rem;
`

const AboutTitle = styled.h1`
font-size: 3rem;
margin: 0 ;
`

const AboutDescription = styled.p`
width: 43rem;
font-size: 1.5rem;
text-indent: 50px;
`

const AboutDescriptionTop = styled.p`
width: 43rem;
font-size: 1.5rem;
margin-top: 0 ;
text-indent: 50px;
`


