import styled from "styled-components"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import i18n from "../i18n"
import { useEffect, useState } from "react"

const Nav = ({open, changeOpenValue}) => {

    const [active, setActive] = useState("")

    const {t, i18n} = useTranslation();


    const languages = [
        {code: "en", name: "English"},
        {code: "fr", name: "French"}
    ]

console.log(i18n.language)

    return(
        <>
            <List open={open}>


                <li><Linkto onClick={changeOpenValue} to="/about">{t("about")}</Linkto></li>
                {/* <li><Linkto onClick={changeOpenValue} to="/services">Services</Linkto></li> */}
                <li><Linkto onClick={changeOpenValue} to="/contact">{t("contact")}</Linkto></li>

                {languages.map((language)=>(
                    <LanguageButton onClick={() => i18n.changeLanguage(language.code)} key={language.code} >{language.name}</LanguageButton>
                ))}

                <li><BookNowTag href="https://www.fresha.com/a/studio-wick-montreal-montreal-1165-rue-ottawa-iga8musl/booking?menu=true" target="_blank">{t("book")}</BookNowTag></li>
            </List>
        </>
    )
}

export default Nav


const List = styled.ul`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
padding: 0;
z-index: 3;


@media only screen and  (max-width: 1000px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    top:5.4rem;
    right:0;
    height: 100vh;
    width: 100vw;
    padding: 1rem 1.5rem;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    overflow: ${({open}) => open ? 'auto' : 'hidden'};
}


li{
padding: 18px 10px;
font-size: 1.5rem;
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

@media only screen and  (max-width: 1000px) {
    min-width: 7rem;
    margin-bottom: 0.5rem;
    font-size: 1.65rem;
    padding: 1rem;
}
`


const LanguageButton = styled.button`
text-decoration: none;
color:#212e1a;
border: none;
background: #9FA37F;
border-radius: 0.5rem;
transition: ease-in-out 0.1s;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem;
margin: 0 0.5rem;
font-family: 'Montserrat', sans-serif;
font-size: 1rem;

&:hover{
  color: white;
}


@media only screen and  (max-width: 1000px) {
    min-width: 7rem;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    padding: 1rem;
}
`