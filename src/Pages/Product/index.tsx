import { useParams } from 'react-router-dom'
import Hero from '../../Components/Hero'
import Section from '../../Components/Section'
import Galery from '../../Components/Galery'

import { useGetGameQuery } from '../../Services/api'
import Loader from '../../Components/Loader'

type GameParams = {
  id: string
}

const Produto = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" bgColor="black">
        <p> {game?.description} </p>
      </Section>
      <Section title="Mais detalhes" bgColor="gray">
        <p>
          Plataforma: {game?.details.system}
          <br /> Desenvolvedor: {game?.details.developer}
          <br />
          Editora: {game?.details.publisher} <br />
          Idiomas: O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game?.details.languages.join(', ')}.
        </p>
      </Section>
      <Section title="Galeria" bgColor="black">
        <Galery
          name={game.name}
          defaultCover={game.media.cover}
          itemsList={game.media.gallery}
        />
      </Section>
    </>
  )
}

export default Produto
