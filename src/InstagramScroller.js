import { styled } from "styled-components";







const InstagramScroller = () => {

    return(
        <>
        <InstagramSection>
                <InstagramTitle>InstagramScroller</InstagramTitle>
                {/* <script type="text/javascript" src="https://www.juicer.io/embed/yung_szavion/embed-code.js" async defer></script> */}
        </InstagramSection>
        </>
    )
}

export default InstagramScroller


const InstagramSection = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 80vh;
width: 100%;
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


