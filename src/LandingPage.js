import { styled } from "styled-components";
import Haircut from "./Assets/StockHaircut.jpg"


const LandingPage = () => {

    return(
        <>
        <LandingPageDiv>
            <HaircutImage src={Haircut}/>
            <LandingTitle>
                <TitleDiv>Redefining Hair</TitleDiv>
            </LandingTitle>
        </LandingPageDiv>

        </>
    )
}

export default LandingPage

const LandingPageDiv = styled.section`
height: 75vw;
width: 100%;
display:flex;
`


const HaircutImage = styled.img`
object-fit: cover;
height: 88vh;
width: 100%;
`

const LandingTitle = styled.h1`
position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #424874;
  font-size: 5rem;
  text-shadow: 0 0 1px #c1dbe3, 0 0 1px #c1dbe3;
`

const TitleDiv = styled.div`
background-color: rgb(247,147,76, 0.15);
padding: 1rem;
border-radius: 1rem;

`