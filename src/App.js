import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import GlobalStyles from './GlobalStyles';
import Header from './Header/Header';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Services from './Services';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <>
    <GlobalStyles/>
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
