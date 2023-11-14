import { styled } from "styled-components";



const InstagramScroller = () => {

    return(
        <>
        <InstagramSection>
                <InstagramTitle>InstagramScroller</InstagramTitle>
        </InstagramSection>
        </>
    )
}

export default InstagramScroller


const InstagramSection = styled.section`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
max-width: 100vw;
height: 80vh;
background-color: #BEAD93;
box-sizing: border-box;



`



const InstagramTitle = styled.h1`
font-size: 3rem;
margin: 0 ;

@media only screen and (max-width: 600px) {
    font-size: 2rem;
}

`


