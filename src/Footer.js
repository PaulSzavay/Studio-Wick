import { styled } from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";


const Footer = () => {

    return(
        <>
        <FooterDiv>
            {/* <Location>
                <h3>Location</h3>
                <GoogleMaps href="https://www.google.com/maps/place/STUDIO+WICK/@45.4931291,-73.5627637,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91b496cb6b92f:0x90bddfbdee52ed1d!8m2!3d45.4931254!4d-73.5601888!16s%2Fg%2F11trmw4jhs?entry=ttu" target="_blank">
                <CiLocationOn />1165 Rue Ottawa Montréal, QC H3C 1S6</GoogleMaps>
            </Location>
            <Contact>
                <h3>Contact</h3>
                <p>email?</p>
            </Contact>
            <Hours>
                <h3>Follow Us</h3>
                <InstaLink href="https://www.instagram.com/studiowickmtl" target="_blank"><AiFillInstagram /></InstaLink>
            </Hours>
            <Policies>
                <h3>©2023, Studio Wick All Rights Reserved</h3>
            </Policies> */}
        </FooterDiv>    
        </>
    )
}

export default Footer

const FooterDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
height: 12vh;
width: 100%;

background-color: #9FA37F;
//color (dark-olive) was #212e1a
color:white;

@media only screen and (max-width: 1400px) {
    height: 20vh;
}


` 

const Location = styled.div`
`

const GoogleMaps = styled.a`
text-decoration: none;
color:white;
`

const Contact = styled.div`
`

const Hours = styled.div`
`

const Policies = styled.div`
width:12rem;
`

const InstaLink = styled.a`
text-decoration: none;
color:white;
font-size: 1.5rem;
`