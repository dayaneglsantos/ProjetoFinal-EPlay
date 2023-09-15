import Banner from '../../Components/Banner'
import Loader from '../../Components/Loader'
import ProductsList from '../../Components/ProductsList'
import { useGetOnSaleQuery, useGetSoonGamesQuery } from '../../Services/api'

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
