import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom'
import Anime from './pages/Anime';


function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:id" element={<Anime />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
