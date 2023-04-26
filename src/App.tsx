import './App.css'
import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Footer from './components/estaticos/footer/Footer'
import Login from './paginas/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaPostagem from './components/postagem/listapostagem/ListaPostagem'
import ListaTema from './components/postagem/tabpostagem/TabPostagem'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagem" element={<ListaPostagem />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App 