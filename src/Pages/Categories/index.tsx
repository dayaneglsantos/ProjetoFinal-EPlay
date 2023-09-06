import ProductsList from '../../Components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../Services/api'

const Categories = () => {
  const { data: acao } = useGetActionGamesQuery()
  const { data: luta } = useGetFightGamesQuery()
  const { data: RPG } = useGetRpgGamesQuery()
  const { data: simulacao } = useGetSimulationGamesQuery()
  const { data: esportes } = useGetSportGamesQuery()

  if (acao && luta && RPG && simulacao && esportes) {
    return (
      <>
        <ProductsList
          games={acao}
          backgroundColor={'black'}
          sectionTitle="Ação"
          id="action"
        />
        <ProductsList
          games={esportes}
          backgroundColor={'gray'}
          sectionTitle="Esportes"
          id="sports"
        />
        <ProductsList
          games={luta}
          backgroundColor={'black'}
          sectionTitle="Luta"
          id="fight"
        />
        <ProductsList
          games={RPG}
          backgroundColor={'gray'}
          sectionTitle="RPG"
          id="rpg"
        />
        <ProductsList
          games={simulacao}
          backgroundColor={'black'}
          sectionTitle="Simulação"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
