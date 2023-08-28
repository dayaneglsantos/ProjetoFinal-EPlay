import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './Components/Banner'
import Header from './Components/Header'
import { GlobalStyle } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
