import Banner from '../../Components/Banner'
import Loader from '../../Components/Loader'
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
  const { data: onSale, isLoading: loadingSale } = useGetOnSaleQuery()
  const { data: soon, isLoading: loadingSoon } = useGetSoonGamesQuery()

  if (onSale && soon) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSale}
          backgroundColor={'gray'}
          sectionTitle="Promoções"
          id="onSale"
          loading={loadingSale}
        />
        <ProductsList
          games={soon}
          backgroundColor={'black'}
          sectionTitle="Em Breve"
          id="coming-soon"
          loading={loadingSoon}
        />
      </>
    )
  }
  return <Loader />
}

export default Home
