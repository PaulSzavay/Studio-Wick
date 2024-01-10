import styled from "styled-components"
import { Link } from "react-router-dom"

const Nav = ({open}, {setOpen}) => {

    return(
        <>
            <List open={open}>
                <li><Linkto onClick={()=> setOpen(!open)} to="/about">About</Linkto></li>
                <li><Linkto onClick={()=> setOpen(!open)} to="/services">Services</Linkto></li>
                <li><Linkto onClick={()=> setOpen(!open)} to="/contact">Contact</Linkto></li>
                <li><BookNowTag href="https://www.fresha.com/a/studio-wick-montreal-montreal-1165-rue-ottawa-iga8musl/booking?menu=true" target="_blank">Book Now</BookNowTag></li>
            </List>
        </>
    )
}

export default Nav


const List = styled.ul`
list-style: none;
display: flex;
margin: 0;
padding: 0;
z-index: 3;


@media only screen and  (max-width: 1000px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    top:4rem;
    right:0;
    height: 100vh;
    width: 100vw;
    padding: 1rem 1.5rem;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    overflow: ${({open}) => open ? 'auto' : 'hidden'};
}


li{
padding: 18px 10px;
font-size: clamp(1rem, 2.5vw, 2rem);
position: static;
}
`

const Linkto = styled(Link)`
text-decoration: none;
color:#9FA37F;

&:hover{
    text-decoration: underline;
    padding-bottom: 0.5rem;
}
`

const BookNowTag = styled.a`

text-decoration: none;
color:#212e1a;
padding: 0.5rem;
border: none;
background: #9FA37F;
border-radius: 0.5rem;
transition: ease-in-out 0.1s;
box-sizing: border-box;

&:hover{
  color: white;
}
`