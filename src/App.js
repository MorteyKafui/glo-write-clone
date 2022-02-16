import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Navbar from './components/Navbar';
import Phone from './components/Phone';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Phone />
        <Header />
      </div>
    </Router>
  );
};

export default App;
