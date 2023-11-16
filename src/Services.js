import { styled } from "styled-components";



const Services = () => {

    return(
        <>
        <ServicesSection>
            <ServicesText>
                <ServicesTitle>Services</ServicesTitle>
                <ServicesDescription>Wedding Packages / Student Discount day / blowdry cards / referrals </ServicesDescription>
            </ServicesText>
        </ServicesSection>

        </>
    )
}

export default Services


const ServicesSection = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 80vh;
width: 100%;
background-color: #C6B8AF;
box-sizing: border-box;
`


const ServicesText = styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding-left: 3rem;
`

const ServicesTitle = styled.h1`
font-size: 3rem;
margin: 0 ;
`

const ServicesDescription = styled.p`
width: 43rem;
font-size: 1.5rem;
text-indent: 50px;
`



