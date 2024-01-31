import { styled } from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <MidContentBlock>
          <LeftInfo>
            <Location>
              <GoogleMaps
                href="https://www.google.com/maps/place/1319+Rue+Barr%C3%A9,+Montr%C3%A9al,+QC+H3C+1N3/@45.4922432,-73.5669935,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a6136da2cad:0x2974e1cf689cf598!8m2!3d45.4922395!4d-73.5644186!16s%2Fg%2F11tg2y1h8g?entry=ttu"
                target="_blank"
              >
                <IconPDiv>
                  <ReactIcons>
                    <CiLocationOn fontSize="1.25rem" />
                  </ReactIcons>
                  <Maps>1319 Rue Barré Montréal, QC H3C 1N3</Maps>
                </IconPDiv>
              </GoogleMaps>
            </Location>
            <Contact>
              <IconPDiv>
                <ReactIcons>
                  <FiPhone />
                </ReactIcons>
                <Email>514-898-9425</Email>
              </IconPDiv>
              <IconPDiv>
                <ReactIcons href="mailto:studiowick@mail.com">
                  <MdOutlineMailOutline />
                </ReactIcons>
                <Email href="mailto:studiowick@mail.com">
                  studiowick@mail.com
                </Email>
              </IconPDiv>
            </Contact>
          </LeftInfo>
          <RightInfo>
            <Follow>
              <FollowDiv>
                <p>Follow Us:</p>
                <Circle>
                  <p>
                    <ReactIcons
                      href="https://www.instagram.com/studiowickmtl"
                      target="_blank"
                    >
                      <AiFillInstagram />
                    </ReactIcons>
                  </p>
                </Circle>
                <Circle>
                  <p>
                    <ReactIcons
                      href="https://www.tiktok.com/@studiowickmtl"
                      target="_blank"
                    >
                      <FaTiktok />
                    </ReactIcons>
                  </p>
                </Circle>
              </FollowDiv>
            </Follow>
            <Policies>
              <p>©2023, Studio Wick All Rights Reserved</p>
              <p>
                Website by:{" "}
                <Designer
                  href="https://www.linkedin.com/in/paulszavay/"
                  target="_blank"
                >
                  Paul Szavay
                </Designer>
              </p>
            </Policies>
          </RightInfo>
        </MidContentBlock>
      </FooterDiv>
    </>
  );
};

export default Footer;

const ReactIcons = styled.a`
  display: flex;
  font-size: 1.3rem;
  padding: 0 0.4rem;
  text-decoration: none;
  color: white;
  @media only screen and (max-width: 750px) {
    padding: 0;
  }

  @media only screen and (max-width: 750px) {
    font-size: 1rem;
  }
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  h3 {
    margin: 0;
  }
  p,
  a {
    margin: 0;
  }

  background-color: #9fa37f;
  //color (dark-olive) was #212e1a
  color: white;

`;

const MidContentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1300px;

  @media only screen and (max-width: 750px) {
    display: block;
  }
`;

const Location = styled.div`
margin-left: -4px;
`;

const GoogleMaps = styled.a`
  text-decoration: none;
  color: white;
`;

const Contact = styled.div``;

const LeftInfo = styled.div`
  margin: 0 1rem 0 0;
  @media only screen and (max-width: 750px) {
    margin: 0;
  }
`;

const RightInfo = styled.div`
  margin: 0 0 0 1rem;
  @media only screen and (max-width: 750px) {
    margin: 0;
  }
`;

const Follow = styled.div`
  display: flex;
  align-items: center;
  height: 4svh;
  padding-bottom: 0.5rem;
  @media only screen and (max-width: 750px) {
    padding: 1.5rem 0 1rem 0;
  }
`;

const Email = styled.a`
  color: white;
  text-decoration: underline;
  

  @media only screen and (max-width: 750px) {
    padding: 0 0 0 0.3rem;
  }
  @media only screen and (max-width: 350px) {
    font-size: 0.75rem;
  }
`;

const Maps = styled(Email)`
padding: 0 0.25rem ;
`

const FollowDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.75rem;



  @media only screen and (max-width: 350px) {
    p{
        font-size: 0.75rem;
    }
  }
`;

const Policies = styled.div`
  @media only screen and (max-width: 350px) {
    padding-top: 0.5rem;
    font-size: 0.75rem;
  }
`;



const IconPDiv = styled.div`
  display: flex;
  flex-direction: row;
`;



const Designer = styled.a`
  text-decoration: underline;
  color: white;
`;

const Circle = styled.div`
  background-color: #212e1a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 1rem;
  height: 2rem;
  width: 2rem;
  border-radius: 55%;  
  
  @media only screen and (max-width: 750px) {
    height: 1.75rem;
    width: 1.75rem;
  }

`;
