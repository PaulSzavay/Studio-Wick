import { styled } from "styled-components";
import Placeholder2 from "./Assets/Placeholder2.png"



const MissionStatement = () => {

    return(
        <>
        <MissionSection>
            <MissionText>
                <MissionTitle>Who are we?</MissionTitle>
                <MissionStatementText>At StudioWick, we are dedicated to redefining beauty standards and fostering inclusivity. We believe in a world where haircuts have no gender, where strong women are celebrated, and where every individual feels safe, confident, and comfortable in their own skin. Our mission is to empower and uplift, creating a space where authenticity thrives, and self-expression knows no bounds.</MissionStatementText>
            </MissionText>
            <MissionPhoto>
                <MissionImage src={Placeholder2}/>
            </MissionPhoto>
        </MissionSection>
        </>
    )
}

export default MissionStatement


const MissionSection = styled.section`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
max-width: 100vw;
height: 80vh;
background-color: #C6B8AF;
box-sizing: border-box;

@media only screen and (max-width: 1400px) {
    flex-direction: column;
}

`

const MissionText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
text-indent: 50px;

@media only screen and (max-width: 1400px) {
    max-width: 500px;
}

@media only screen and (max-width: 600px) {
    max-width: 300px;
    text-indent: 0px;
}

`


const MissionTitle = styled.h1`
font-size: 3rem;
margin: 0 ;
@media only screen and (max-width: 680px) {
    text-align: center;
    font-size: 2rem;
}
`

const MissionStatementText = styled.p`
width: 45rem;
font-size: 1.5rem;
@media only screen and (max-width: 1400px) {
    max-width: 500px;
}

@media only screen and (max-width: 600px) {
    max-width: 200px;
}
`

const MissionPhoto = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
`

const MissionImage = styled.img`

@media only screen and (max-width: 1400px) {
    max-width: 500px;
}

@media only screen and (max-width: 600px) {
    max-width: 300px;
}

`
