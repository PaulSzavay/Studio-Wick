import { styled } from "styled-components";

const Contact = () => {

    return(
        <>
            <ContactDiv>
                <ContactTitle>
                    How to reach me?
                </ContactTitle>
                <ContactInformation>
                    <ContactText>
                    Message me on either Instagram or send me an email.
                    </ContactText>
                </ContactInformation>

            </ContactDiv>

        </>
    )
}

export default Contact


const ContactDiv = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
`

const ContactTitle = styled.h1`

`

const ContactInformation = styled.div`
display: flex;
justify-items: center;
align-items: center;
`

const ContactText = styled.p`
`