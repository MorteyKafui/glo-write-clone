import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Features from './components/Features';
import Header from './components/Header';

import Navbar from './components/Navbar';
import Phone from './components/Phone';
import GuaranteesPage from './pages/GuaranteesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import OurServicesPage from './pages/OurServicesPage';
import OurWritersPage from './pages/OurWritersPage';
import PricingPage from './pages/PricingPage';
import ReviewsPage from './pages/ReviewsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <>
          <Route
            exact
            path='/'
            element={
              <>
                <Navbar />
                <div className='container'>
                  <Phone />
                  <Header />
                  <Features />
                </div>
              </>
            }
          />

          <Route path='/our-services' element={<OurServicesPage />} />
          <Route path='/how-it-works' element={<HowItWorksPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/reviews' element={<ReviewsPage />} />
          <Route path='/guarantees' element={<GuaranteesPage />} />
          <Route path='/our-writers' element={<OurWritersPage />} />
        </>
      </Routes>
    </Router>
  );
};

export default App;
