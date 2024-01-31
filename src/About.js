import { styled } from "styled-components";
import Steph1 from "./Assets/Steff2Update.jpg"
import Steph2 from "./Assets/Steff1Update.jpg"
import Steph3 from "./Assets/Steff3Update.jpg"

const About = () => {

    return(
        <>
        <AboutSection>
        <Box>
        <Section>
        <AboutDescription>
        At StudioWick, we are dedicated to redefining beauty standards and fostering inclusivity. We believe in a world where haircuts have no gender, where strong women are celebrated, and where every individual feels safe, confident, and comfortable in their own skin. Our mission is to empower and uplift, creating a space where authenticity thrives, and self-expression knows no bounds.
        </AboutDescription>
        </Section>
            <Section>
            <PhotoDiv>
            <WickPhoto src={Steph1}/>
            </PhotoDiv>
            <AboutText>
                <AboutTitle>Who is Steff?</AboutTitle>
                <AboutDescription>Steff always wanted to be a hairstylist. Graduating from Algonquin College in Hairstyling, Steff spent the first 6 years of her career in Ottawa. In 2021, she moved back home to Montreal, and in 2023, opened StudioWick. Steff specializes in precision cutting and takes a lot of pride in it. She also has a passion for highlighting and big colour transformations.</AboutDescription>
            </AboutText>
            </Section>

            <Section2>
            <AboutText>
                <AboutTitle>What makes Steff different?</AboutTitle>
                <AboutDescription>Steff is motivated by challenging society's beauty standards, and strives to create an environment where people don't have to conform to a specific image. She believes in listening to her clients and offering her opinions in a way that complements their desires.</AboutDescription>
            </AboutText>
            <PhotoDiv>
            <WickPhoto src={Steph2}/>
            </PhotoDiv>
            </Section2>

            <Section>
            <PhotoDiv>
            <WickPhoto src={Steph3}/>
            </PhotoDiv>
            <AboutText>
                <AboutTitle>Steff's Goal</AboutTitle>
                <AboutDescription>When clients visit StudioWick, they can expect a safe space where they can truly be themselves. Steff is dedicated to listening, understanding, and making your hair goals a reality. She aims to provide an atmosphere that fosters a sense of comfort and belonging.</AboutDescription>
            </AboutText>
            </Section>
            </Box>
        </AboutSection>

        </>
    )
}

export default About


const AboutSection = styled.section`
background-color: #F6F6F6;
display: flex;
justify-content: center;
align-items: center;
padding: 8rem 0;
`


const Box = styled.div`
max-width: 1100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Section = styled.div`
min-height: 175px;
display: flex;
justify-content: center;
align-items: center;
margin: 2rem;
@media only screen and  (max-width: 1000px) {
    flex-direction: column-reverse;
    margin: 0rem;
    width: 90%;
    padding-bottom: 1rem;
}
`

const Section2 = styled(Section)`
@media only screen and  (max-width: 1000px) {
    flex-direction: column;
}
`



const PhotoDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;
`

const WickPhoto = styled.img`
object-fit: contain;
border-radius: 25%;
width: 300px;


@media only screen and  (max-width: 1000px) {
    width: 250px;
}
`

const AboutText = styled.div`

display: flex;
flex-direction: column;
padding-left: 3rem;
padding-top: 1.5rem;

@media only screen and  (max-width: 1000px) {
    padding-left: 0rem;
    font-size: smaller;
}
@media only screen and  (max-width: 300px) {
    /* padding-left: 0.5rem; */
    font-size: x-small;
}
`

const AboutTitle = styled.h1`
font-size: 2rem;
margin: 0rem 1rem;

@media only screen and  (max-width: 1000px) {
font-size: 1.5rem;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
}

`

const AboutDescription = styled.p`
font-size: 1.5rem;
margin: 1rem;
/* text-indent: 50px; */
text-align: justify;
text-justify: inter-word;

@media only screen and  (max-width: 1000px) {
text-indent: 0%;
text-align: center;
font-size: 0.9rem;
margin: 0rem;
padding-top: 1rem;
}
`




