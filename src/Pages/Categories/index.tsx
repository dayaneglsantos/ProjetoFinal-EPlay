import ProductsList from '../../Components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../Services/api'

const Categories = () => {
  const { data: action, isLoading: loadingAction } = useGetActionGamesQuery()
  const { data: fight, isLoading: loadingFight } = useGetFightGamesQuery()
  const { data: RPG, isLoading: loadingRPG } = useGetRpgGamesQuery()
  const { data: simulation, isLoading: loadingsimulation } =
    useGetSimulationGamesQuery()
  const { data: sports, isLoading: loadingSports } = useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        games={action}
        backgroundColor={'black'}
        sectionTitle="Ação"
        id="action"
        loading={loadingAction}
      />
      <ProductsList
        games={sports}
        backgroundColor={'gray'}
        sectionTitle="Esportes"
        id="sports"
        loading={loadingSports}
      />
      <ProductsList
        games={fight}
        backgroundColor={'black'}
        sectionTitle="Luta"
        id="fight"
        loading={loadingFight}
      />
      <ProductsList
        games={RPG}
        backgroundColor={'gray'}
        sectionTitle="RPG"
        id="rpg"
        loading={loadingRPG}
      />
      <ProductsList
        games={simulation}
        backgroundColor={'black'}
        sectionTitle="Simulação"
        id="simulation"
        loading={loadingsimulation}
      />
    </>
  )
}

export default Categories
