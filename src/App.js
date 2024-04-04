
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home/Home';
import AboutPage from './components/about/About';
import ServicesPage from './components/services/Services';
import ContactsPage from './components/Contacts';
import Footer from './components/footer/Footer';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

