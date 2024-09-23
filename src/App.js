import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Faq } from './pages/faq';
import NotFound from './components/notfound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
