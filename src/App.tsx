import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './Components/Header'
import { GlobalStyle } from './styles'
import Rotas from './route'
import Footer from './Components/Footer'
import { store } from './Store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
