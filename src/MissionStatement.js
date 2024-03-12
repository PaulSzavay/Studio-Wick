import { styled } from "styled-components";
import SteffPhoto from "./Assets/Steff4Update.jpg"
import MediaQuery from 'react-responsive'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

import i18n from "./i18n";





const MissionStatement = () => {

        const {t} = useTranslation();

    return(
        <>
        <MissionSection>
            {/* <WaveDiv>
            <WaveImage src={wave}/><WaveImage src={wave}/><WaveImage src={wave}/><WaveImage src={wave}/><WaveImage src={wave}/><WaveImage src={wave}/><WaveImage src={wave}/><WaveImage src={wave}/><WaveImage src={wave}/>
            </WaveDiv> */}
            <Statement>{t("mission_statement_title")}</Statement>
            <MidContentBlock>
                    <MissionText>
                        {/* <MissionTitle>Who are we?</MissionTitle>
                        <MissionStatementText>At StudioWick, we are dedicated to redefining beauty standards and fostering inclusivity. We believe in a world where haircuts have no gender, where strong women are celebrated, and where every individual feels safe, confident, and comfortable in their own skin. Our mission is to empower and uplift, creating a space where authenticity thrives, and self-expression knows no bounds.</MissionStatementText> */}
                        <MissionTitle>{t("mission_statement_phrase")}</MissionTitle>
                        <MissionButton to="/about">{t("mission_statement_button")}</MissionButton>
                    </MissionText>
                <MediaQuery minWidth={300}>
                    <MissionPhoto>
                        <MissionImage src={SteffPhoto}/>
                    </MissionPhoto>
                </MediaQuery>
            </MidContentBlock>    
        </MissionSection>
        </>
    )
}

export default MissionStatement


const MissionSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F6F6F6;
position: relative;
padding: 0 0 3rem;

/* background-color: #C6B8AF; */
@media only screen and (max-width: 1050px) {
    flex-direction: column;
    padding: 1rem 0 3rem;
}

/* @media only screen and (max-width: 550px) {

}

@media only screen and (max-width: 450px) {

} */
`

const MidContentBlock = styled.div`
display: flex;
justify-content: space-between;

max-width: 1300px;

  @media (max-width: 820px) {
    width: 90vw;
    
  }

  @media (max-width: 550px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    
  }
`

// const WaveDiv = styled.div`
// `

// const WaveImage = styled.img`
// height: 2rem;
// `


const MissionText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
font-family: 'Playfair Display', serif;

/* border: 0.1rem solid rgb(33,46,26,0.5) ;
border-radius: 1rem; */
color:#2A471C;
/* color:#212e1a; */
/* background-color:#BEAD93; */
padding: 0 5rem 0 0;




@media only screen and (max-width: 1400px) {
    padding: 1rem;
    align-items: center;
}


@media only screen and (max-width: 1050px) {
    padding: 0 2rem;
}


@media only screen and (max-width: 900px) {

}

@media only screen and (max-width: 650px) {

}

@media only screen and (max-width: 433px) {

}

`


const MissionTitle = styled.h1`
font-size: 3.5rem;
margin: 0;
/* text-align: center; */
width: 600px;
font-style: italic;

@media only screen and (max-width: 820px) {
    font-size: 2rem;
    margin-top: 2rem;
    text-align: center;
    width: 350px;
}
@media only screen and (max-width: 550px) {
    /* font-size: 1.25rem; */
}
`


const MissionPhoto = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 65%;


@media only screen and (max-width: 1050px) {
    width: 90%;
}

`

const MissionImage = styled.img`
width: 100%;

@media only screen and (max-width: 1050px) {
    padding-right: 1rem;
}

@media only screen and (max-width: 550px) {
    padding-right: 0rem;
}



`

const MissionButton = styled(Link)`
font-family: 'Montserrat', sans-serif;
margin-top: 1rem;
padding: 1rem;
height: 3rem;
font-size: 1rem;
border-radius: 1rem;
background-color: #212e1a;
color: #9fa37f;
border: 0.1rem solid #9fa37f;
transition: 0.2s ease-in-out;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
text-decoration: none;

@media only screen and (max-width: 750px) {
    padding: 0.2rem 0.6rem;
    height: 2.5rem;
  }

  @media only screen and (max-width: 350px) {
    
  }

&:hover{
    background-color: #9fa37f;
    color: #212e1a;
    border: 0.1rem solid #212e1a;
}
`

const Statement = styled.p`
margin-bottom: 4rem;
font-family: 'Playfair Display', serif;
font-size: 3.5rem;
color:#2A471C;
font-weight: 500;
text-align: center;
font-style: italic;
font-weight: 700;

@media only screen and (max-width: 450px) {
width: 375px;
font-size: 2.35rem;
}
`


