import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Header from './components/Header/Header';
import Servicos from './components/Servicos/Servicos';
import Contato from './components/Contato/Contato';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Servicos" element={<Servicos />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;