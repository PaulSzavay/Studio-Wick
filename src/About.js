import { styled } from "styled-components";
import Steph1 from "./Assets/Steff2Update.jpg"
import Steph2 from "./Assets/Steff1Update.jpg"
import Steph3 from "./Assets/Steff3Update.jpg"
import { useTranslation } from "react-i18next"

import i18n from "./i18n";


const About = () => {

    const {t} = useTranslation();

    return(
        <>
        <AboutSection>
        <Box>
        <Section>
        <AboutDescriptionMission>
        {t("about_mission_statement")}
        </AboutDescriptionMission>
        </Section>
            <Section>
            <PhotoDiv>
            <WickPhoto src={Steph1}/>
            </PhotoDiv>
            <AboutText>
                <AboutTitle>{t("about_title1")}</AboutTitle>
                <AboutDescription>{t("about_section1")}</AboutDescription>
            </AboutText>
            </Section>

            <Section2>
            <AboutText>
                <AboutTitle>{t("about_title2")}</AboutTitle>
                <AboutDescription>{t("about_section2")}</AboutDescription>
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
                <AboutTitle>{t("about_title3")}</AboutTitle>
                <AboutDescription>{t("about_section3")}</AboutDescription>
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
text-align: justify;
text-justify: inter-word;

@media only screen and  (max-width: 1000px) {
text-indent: 0%;
text-align: center;
font-size: 0.9rem;
margin: 0rem;
padding-top: 0.75rem;
}
`

const AboutDescriptionMission = styled(AboutDescription)`

@media only screen and  (max-width: 1000px) {
font-size: 1.1rem;
font-weight: 500;
}
`




