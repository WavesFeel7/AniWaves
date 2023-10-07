import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/anime/:id" element={} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
