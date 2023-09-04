import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../../Components/Hero'
import Section from '../../Components/Section'
import Galery from '../../Components/Galery'
import { Game } from '../Home'

const Produto = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((resp) => resp.json())
      .then((json) => setGame(json))
  })

  if (!game) {
    return <h3>Carregando...</h3>
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
