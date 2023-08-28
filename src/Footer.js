import { styled } from "styled-components"


const Footer = () => {

    return(
        <>
        <FooterDiv>
            <Location>Location</Location>
            <Contact>Contact</Contact>
            <Hours>Opening Hours</Hours>
            <Policies>Policies</Policies>
        </FooterDiv>    
        </>
    )
}

export default Footer

const FooterDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const Location = styled.div`
`

const Contact = styled.div`
`

const Hours = styled.div`
`

const Policies = styled.div`
`