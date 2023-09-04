import { useEffect, useState } from 'react'
import ProductsList from '../../Components/ProductsList'

const Categories = () => {
  const [acao, setAcao] = useState([])
  const [esportes, setEsportes] = useState([])
  const [luta, setLuta] = useState([])
  const [RPG, setRPG] = useState([])
  const [simulacao, setSimulacao] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((resp) => resp.json())
      .then((json) => setAcao(json))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((resp) => resp.json())
      .then((json) => setEsportes(json))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((resp) => resp.json())
      .then((json) => setLuta(json))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((resp) => resp.json())
      .then((json) => setRPG(json))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((resp) => resp.json())
      .then((json) => setSimulacao(json))
  }, [])

  return (
    <>
      <ProductsList
        games={acao}
        backgroundColor={'black'}
        sectionTitle="Ação"
      />
      <ProductsList
        games={esportes}
        backgroundColor={'gray'}
        sectionTitle="Esportes"
      />
      <ProductsList
        games={luta}
        backgroundColor={'black'}
        sectionTitle="Luta"
      />
      <ProductsList games={RPG} backgroundColor={'gray'} sectionTitle="RPG" />
      <ProductsList
        games={simulacao}
        backgroundColor={'black'}
        sectionTitle="Simulação"
      />
    </>
  )
}

export default Categories
