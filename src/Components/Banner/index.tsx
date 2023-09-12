import { formataPreco } from '../ProductsList'
import Tag from '../Tag'

import { useGetFeaturedGameQuery } from '../../Services/api'

import { ButtonLink } from '../Button/styles'
import { BannerContaier, Preco, Titulo } from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  return (
    <BannerContaier style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Preco>
            De <span>{formataPreco(game?.prices.old)}</span> <br />
            por apenas {formataPreco(game?.prices.current)}
          </Preco>
        </div>
        <ButtonLink to={`produto/${game?.id}`}>Aproveitar</ButtonLink>
      </div>
    </BannerContaier>
  )
}

export default Banner
