import Banner from './Components/Banner'
import Header from './Components/Header'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
