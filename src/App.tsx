import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import { GlobalStyle } from './styles'
import Rotas from './route'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
