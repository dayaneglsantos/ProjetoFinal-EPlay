import { useEffect, useState } from 'react'
import Banner from '../../Components/Banner'
import ProductsList from '../../Components/ProductsList'

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
  const [promocoes, setPromocoes] = useState([])
  const [emBreve, setEmBreve] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((resp) => resp.json())
      .then((resp) => setPromocoes(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((resp) => resp.json())
      .then((resp) => setEmBreve(resp))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList
        games={promocoes}
        backgroundColor={'gray'}
        sectionTitle="Promoções"
      />
      <ProductsList
        games={emBreve}
        backgroundColor={'black'}
        sectionTitle="Em Breve"
      />
    </>
  )
}

export default Home
