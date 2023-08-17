import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import GlobalStyles from './GlobalStyles';
import Header from './Header';

const App = () => {
  return (
    <>
    <GlobalStyles/>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
