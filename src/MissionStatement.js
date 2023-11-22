import { styled } from "styled-components";
import Placeholder2 from "./Assets/Placeholder2.png"
import MediaQuery from 'react-responsive'


const MissionStatement = () => {

    return(
        <>
        <MissionSection>
            <MidContentBlock>
                    <MissionText>
                        <MissionTitle>Who are we?</MissionTitle>
                        <MissionStatementText>At StudioWick, we are dedicated to redefining beauty standards and fostering inclusivity. We believe in a world where haircuts have no gender, where strong women are celebrated, and where every individual feels safe, confident, and comfortable in their own skin. Our mission is to empower and uplift, creating a space where authenticity thrives, and self-expression knows no bounds.</MissionStatementText>
                    </MissionText>
                <MediaQuery minWidth={300}>
                    <MissionPhoto>
                        <MissionImage src={Placeholder2}/>
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
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #C6B8AF;
padding: 8rem 0;

@media only screen and (max-width: 1050px) {
    flex-direction: column;
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

  @media (max-width: 850px) {
    width: 90vw;
    
  }

  @media (max-width: 550px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    
  }
`



const MissionText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 0.1rem solid rgb(33,46,26,0.5) ;
border-radius: 1rem;
color:#212e1a;
background-color:#BEAD93;
padding: 4rem;



@media only screen and (max-width: 1400px) {
    padding: 1rem;
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
font-size: 1.5rem;
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

@media only screen and (max-width: 1050px) {
    
}

`

const MissionImage = styled.img`


@media only screen and (max-width: 1400px) {
}


@media only screen and (max-width: 1050px) {
}


@media only screen and (max-width: 900px) {

}

@media only screen and (max-width: 650px) {

}

@media only screen and (max-width: 433px) {

}


`
