import { styled } from "styled-components";
import Placeholder from "./Assets/Placeholder.jpg"
import Shampoo from "./Assets/istockphoto-1356587396-612x612.jpg"
import Footer from "./Footer";

const Homepage = () => {

    return(
        <>
        <CoverImageDiv>
            <Book>
                <BookImage src={Placeholder}/>
                <BookButton>Book Now</BookButton>
            </Book>
            <Shop>
                <ShopImage src={Shampoo}/>
                <ShopButton>Shop</ShopButton>
            </Shop>
        </CoverImageDiv>

        <Footer/>
        </>
    )
}

export default Homepage

const CoverImageDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 75vh;
width: 100vw;

`

const Book = styled.div`
max-width: 732px;
margin: 0rem 1rem;
`

const BookImage = styled.img`
max-height: 500px;
object-fit: cover;

`

const Shop = styled.div`
max-width: 713px;
margin: 0rem 1rem;
`

const ShopImage = styled.img`
min-height: 500px;

`

const BookButton = styled.button`
transform: translate(265px, -270px);
border: none;
height: 3rem;
width: 12rem;
font-size: 2rem;
border-radius: 5rem;
background-color: white;


&:hover{
    background-color: orange;
    border-radius: 5rem;
}
`

const ShopButton = styled.button`
transform: translate(265px, -270px);
border: none;
height: 3rem;
width: 12rem;
font-size: 2rem;
border-radius: 5rem;
background-color: white;


&:hover{
    background-color: orange;
    border-radius: 5rem;
}
`
