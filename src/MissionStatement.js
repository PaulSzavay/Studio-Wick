import { styled } from "styled-components";
import Placeholder2 from "./Assets/Placeholder2.png"
import MediaQuery from 'react-responsive'


const MissionStatement = () => {

    return(
        <>
        <MissionSection>
            <MissionText>
                <MissionTitle>Who are we?</MissionTitle>
                <MissionStatementText>At StudioWick, we are dedicated to redefining beauty standards and fostering inclusivity. We believe in a world where haircuts have no gender, where strong women are celebrated, and where every individual feels safe, confident, and comfortable in their own skin. Our mission is to empower and uplift, creating a space where authenticity thrives, and self-expression knows no bounds.</MissionStatementText>
            </MissionText>
            <MediaQuery minWidth={300}>
            <MissionPhoto>
                <MissionImage src={Placeholder2}/>
            </MissionPhoto>
            </MediaQuery>
        </MissionSection>
        </>
    )
}

export default MissionStatement


const MissionSection = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 80vh;
width: 100%;
background-color: #C6B8AF;
box-sizing: border-box;

@media only screen and (max-width: 1050px) {
    flex-direction: column;
}

@media only screen and (max-width: 550px) {
    flex-direction: column;
    height: 75vh;
}

@media only screen and (max-width: 450px) {
    flex-direction: column;
    height: 70vh;
}

`

const MissionText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
padding: 0.5rem 0 0 0;
margin-left: 1rem;
border: 1px solid black;
border-radius: 1rem;
color:#212e1a;
background-color:#968E8C;


@media only screen and (max-width: 1050px) {
    margin-left: 0rem;
}


@media only screen and (max-width: 800px) {
    margin-left: 0rem;
}

`


const MissionTitle = styled.h1`
font-size: 3rem;
margin: 0;
text-align: center;

@media only screen and (max-width: 800px) {
    font-size: 2rem;
}
@media only screen and (max-width: 550px) {
    font-size: 1.5rem;
}

`

const MissionStatementText = styled.p`
width: 75%;
font-size: 1.5rem;
text-indent: 50px;
text-align: justify;



@media only screen and (max-width: 800px) {
    font-size: 1rem;
}

@media only screen and (max-width: 550px) {
    font-size: 0.75rem;
}
`

const MissionPhoto = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;

@media only screen and (max-width: 1050px) {
    margin-top: 1rem;
}

`

const MissionImage = styled.img`
max-width:90%;

@media only screen and (max-width: 1050px) {
    max-width: 55%;
}

`
