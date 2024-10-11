import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import SearchTours from './pages/SearchTours/SearchTours';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Certificates from './pages/Certificates/Certificates';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';

const App = () => {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/search" element={<SearchTours/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/certificates" element={<Certificates/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
