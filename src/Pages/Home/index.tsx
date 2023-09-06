import Banner from '../../Components/Banner'
import ProductsList from '../../Components/ProductsList'
import { useGetOnSaleQuery, useGetSoonGamesQuery } from '../../Services/api'

export type Game = {
  id: number
  name: string
  description: string
  release_date: string
  prices: {
    discount: number
    old: number
    current: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: []
  }
  media: {
    thumbnail: string
    cover: string
    gallery: []
  }
}

const Home = () => {
  const { data: promocoes } = useGetOnSaleQuery()
  const { data: emBreve } = useGetSoonGamesQuery()

  if (promocoes && emBreve) {
    return (
      <>
        <Banner />
        <ProductsList
          games={promocoes}
          backgroundColor={'gray'}
          sectionTitle="Promoções"
          id="onSale"
        />
        <ProductsList
          games={emBreve}
          backgroundColor={'black'}
          sectionTitle="Em Breve"
          id="coming-soon"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
