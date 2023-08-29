import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './Components/Banner'
import Header from './Components/Header'
import { GlobalStyle } from './styles'

import ProductsList from './Components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList backgroundColor={'gray'} sectionTitle="Promoções" />
      </>
    )
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
