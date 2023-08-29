import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import { GlobalStyle } from './styles'
import Rotas from './route'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
