import './App.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Faq } from './pages/faq';
import { Inspirations } from './pages/inspiration';
import { Construction } from './pages/underConstruction';
import { PostPage } from './pages/article/post';
import { Article1 } from './pages/article/article1';
import { Article2 } from './pages/article/article2';
import { Article3 } from './pages/article/article3';
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
          <Route path='/inspirations' element={<Inspirations />} />
          <Route path='/underconstruct' element={<Construction />} />
          <Route path='/post/rent-the-perfect-party' element={<Article1 />} />
          <Route path='/post/upgrade-your-home' element={<Article2 />} />
          <Route path='/post/dapatkan-cash-sewakan-barang' element={<Article3 />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
