import { styled } from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {

    return(
        <>
        <FooterDiv>
            <LeftInfo>
            <Location>
                <h3>Location</h3>
                <GoogleMaps href="https://www.google.com/maps/place/STUDIO+WICK/@45.4931291,-73.5627637,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91b496cb6b92f:0x90bddfbdee52ed1d!8m2!3d45.4931254!4d-73.5601888!16s%2Fg%2F11trmw4jhs?entry=ttu" target="_blank">
                <CiLocationOn />1165 Rue Ottawa Montréal, QC H3C 1S6</GoogleMaps>
            </Location>
            <Contact>
                <h3>Contact</h3>
                <p>email?</p>
            </Contact>
            </LeftInfo>
            <RightInfo>
            <Follow>
                <h3>Follow Us</h3>
                <InstaLink href="https://www.instagram.com/studiowickmtl" target="_blank"><AiFillInstagram /></InstaLink>
                <TikTokLink href="https://www.tiktok.com/@studiowickmtl?lang=en" target="_blank"><FaTiktok /></TikTokLink>
            </Follow>
            <Policies>
                <h3>©2023, Studio Wick All Rights Reserved</h3>
            </Policies>
            </RightInfo>
        </FooterDiv>    
        </>
    )
}

export default Footer

const FooterDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 20vh;
width: 100%;

background-color: #9FA37F;
//color (dark-olive) was #212e1a
color:white;

@media only screen and (max-width: 800px) {
    height: 20vh;
}

div{
    
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

const LeftInfo = styled.div`
width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 3rem;
`

const RightInfo = styled.div`
width: 50%;
width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 3rem;
`

const Follow = styled.div`
`

const Policies = styled.div`
width:12rem;
`

const InstaLink = styled.a`
text-decoration: none;
color:white;
font-size: 1.5rem;
`

const TikTokLink = styled.a`
text-decoration: none;
color:white;
font-size: 1.45rem;
margin-left: 1rem;
`