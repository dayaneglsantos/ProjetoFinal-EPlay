import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Produto from './Pages/Produto'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    <Route path="/produto/:id" element={<Produto />} />
  </Routes>
)

export default Rotas
