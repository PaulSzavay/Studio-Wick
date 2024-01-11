import { styled } from "styled-components";

const Contact = () => {

    return(
        <>
            <ContactDiv>
                <ContactTitle>
                    How to reach me?
                </ContactTitle>

                <ContactRequest>
                    Please feel free to reach out to me via text message or DM me on instagram.
                </ContactRequest>

                <ContactInformation>
                    <ContactForm>
                        <Name for="name">Name:</Name>
                        <NameInput type="text" name="name" id="name" required></NameInput>
                        <Email for="email">Email:</Email>
                        <EmailInput type="email" name="email" id="email" required></EmailInput>
                        <Subject for="subject">Subject:</Subject>
                        <SubjectInput type="text" name="subject" id="subject" required></SubjectInput>
                        <Message for="message">Message:</Message>
                        <MessageInput type="text" name="message" id="message" required></MessageInput>
                        <Submit type="submit" onClick={(e)=>e.preventDefault()}>Submit</Submit>
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
`

const ContactRequest = styled.p`
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
`

const NameInput = styled.input`
  width: 30rem;
  padding: 12px 20px;
  margin: 8px 0;
  font-family: 'Montserrat', sans-serif;
`

const Email = styled.label`
position: relative;
left: -13.4rem;
`

const EmailInput = styled.input`
  width: 30rem;
  padding: 12px 20px;
  margin: 8px 0;
  font-family: 'Montserrat', sans-serif;
`

const Subject = styled.label`
position: relative;
left: -12.75rem;
`

const SubjectInput = styled.input`
  width: 30rem;
  padding: 12px 20px;
  margin: 8px 0;
  font-family: 'Montserrat', sans-serif;
`

const Message = styled.label`
position: relative;
left: -12.55rem;
`

const MessageInput = styled.textarea`
  width: 30rem;
  padding: 12px 20px;
  margin: 8px 0;
  font-family: 'Montserrat', sans-serif;
`

const Submit = styled.button`
margin-top: 1rem;
`