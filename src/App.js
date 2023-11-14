import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';

const App = () => {
  return (
    <>
    <GlobalStyles/>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
