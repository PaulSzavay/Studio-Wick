import { styled } from "styled-components";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next"

import i18n from "./i18n";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qwhjvvs",
        "template_wsiar0s",
        form.current,
        "gq6e2RC6z7b10ccEo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        e.target.reset(),
        window.alert("Email Sent, Thank you!")
      );
  };


  
  const {t} = useTranslation();


    return(
        <>
            <ContactDiv>
                <ContactTitle>
                    {t("contact_title")}
                </ContactTitle>

                <ContactRequest>
                    {t("contact_info")} <span><Insta href="https://www.instagram.com/studiowickmtl" target="_blank">{t("contact_instagram")}</Insta></span>
                </ContactRequest>

                <ContactInformation>
                    <ContactForm ref={form} onSubmit={sendEmail}>
                        <Name for="name">{t("contact_name")}</Name>
                        <NameInput type="text" name="from_name" id="name" required></NameInput>
                        <Email for="email">{t("contact_email")}</Email>
                        <EmailInput type="email" name="from_email" id="email" required></EmailInput>
                        <Subject for="subject">{t("contact_subject")}</Subject>
                        <SubjectInput type="text" name="subject" id="subject" required></SubjectInput>
                        <Message for="message">{t("contact_message")}</Message>
                        <MessageInput type="text" name="message" id="message" required></MessageInput>
                        <Submit type="submit">{t("contact_submit")}</Submit>
                    </ContactForm>
                </ContactInformation>
            </ContactDiv>
        </>
    )
}

export default Contact


const ContactDiv = styled.div`
padding: 8rem 0;
display: flex;
flex-direction: column;
align-items: center;
`

const ContactTitle = styled.h1`

@media only screen and (max-width: 400px) {
    text-align: center;
    font-size: 1.5rem;
  }
`

const ContactRequest = styled.p`
@media only screen and (max-width: 800px) {
    text-align: center;
    padding: 0rem 2rem;
  }

  @media only screen and (max-width: 350px) {
    padding: 0rem 1rem;
  }
`

const ContactInformation = styled.div`
display: flex;
justify-items: center;
align-items: center;
`

const ContactForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Name = styled.label`
position: relative;
left: -13.25rem;

@media only screen and (max-width: 750px) {
    left: -8rem;
  }

  @media only screen and (max-width: 350px) {
    left: -5.9rem;
    font-size: 0.9rem;
  }
`

const NameInput = styled.input`
  width: 30rem;
  padding: 12px 20px;
  margin: 8px 0;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (max-width: 750px) {
    width: 20rem;
  }

  @media only screen and (max-width: 350px) {
    width: 15rem;
    margin: 4px 0;
  }
`

const Email = styled.label`
position: relative;
left: -13.4rem;

@media only screen and (max-width: 750px) {
    left: -8.25rem;
  }

  @media only screen and (max-width: 350px) {
    left: -6.1rem;
    font-size: 0.9rem;
  }
`

const EmailInput = styled.input`
  width: 30rem;
  padding: 12px 20px;
  margin: 8px 0;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (max-width: 750px) {
    width: 20rem;
  }

  @media only screen and (max-width: 350px) {
    width: 15rem;
    margin: 4px 0;
  }
`

const Subject = styled.label`
position: relative;
left: -13.25rem;

@media only screen and (max-width: 750px) {
    left: -7.75rem;
  }

  @media only screen and (max-width: 350px) {
    left: -5.6rem;
    font-size: 0.9rem;
  }
`

const SubjectInput = styled.input`
  width: 30rem;
  padding: 12px 20px;
  margin: 8px 0;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (max-width: 750px) {
    width: 20rem;
  }

  @media only screen and (max-width: 350px) {
    width: 15rem;
    margin: 4px 0;
  }
`

const Message = styled.label`
position: relative;
left: -12.55rem;

@media only screen and (max-width: 750px) {
    left: -7.5rem;
  }

  @media only screen and (max-width: 350px) {
    left: -5.4rem;
    font-size: 0.9rem;
  }
`

const MessageInput = styled.textarea`
  width: 30rem;
  height: 15rem;
  padding: 12px 20px;
  margin: 8px 0;
  font-family: 'Montserrat', sans-serif;
  
  @media only screen and (max-width: 750px) {
    width: 20rem;
  }

  @media only screen and (max-width: 350px) {
    width: 15rem;
    margin: 4px 0;
  }
`

const Submit = styled.button`
font-family: 'Montserrat', sans-serif;
margin-top: 1rem;
width: 50%;
height: 4rem;
font-size: 2rem;
border-radius: 1rem;
background-color: #212e1a;
color: #9fa37f;
border: 0.1rem solid #9fa37f;
transition: 0.2s ease-in-out;

@media only screen and (max-width: 750px) {
    width: 65%;
    height: 3rem;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 350px) {
    width: 50%;
    height: 2.25rem;
    font-size: 1.2rem;
  }

&:hover{
    background-color: #9fa37f;
    color: #212e1a;
    border: 0.1rem solid #212e1a;
}
`

const Insta = styled.a`
color: black;
`