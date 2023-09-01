import { Actions, Item, Items, Modal, ModalContent } from './styles'
import starWars from '../../Assets/Images/star_wars.png'
import resident from '../../Assets/Images/resident.png'
import diablo from '../../Assets/Images/diablo.png'
import homemAranha from '../../Assets/Images/banner-homem-aranha.png'
import play from '../../Assets/Images/play.png'
import zoom from '../../Assets/Images/zoom.png'
import close from '../../Assets/Images/fechar.png'

type GaleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GaleryItem[] = [
  {
    type: 'image',
    url: starWars
  },
  {
    type: 'image',
    url: resident
  },
  {
    type: 'video',
    url: diablo
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Galery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GaleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GaleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Items>
        {mock.map((item, index) => (
          <Item key={index}>
            <img
              src={getMediaCover(item)}
              alt={`Mídia ${index + 1} do jogo ${name}`}
            />
            <Actions>
              <img src={getMediaIcon(item)} alt="Ampliar mídia" />
            </Actions>
          </Item>
        ))}
      </Items>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Icone de fechar" />
          </header>
          <img src={homemAranha} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Galery
