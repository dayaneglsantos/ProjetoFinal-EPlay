import { useState } from 'react'
import { Actions, Item, Items, Modal, ModalContent } from './styles'
import starWars from '../../Assets/Images/star_wars.png'
import resident from '../../Assets/Images/resident.png'
import play from '../../Assets/Images/play.png'
import zoom from '../../Assets/Images/zoom.png'
import close from '../../Assets/Images/fechar.png'

interface GaleryItem {
  type: 'image' | 'video'
  url: string
}

interface ModalState extends GaleryItem {
  isVisible: boolean
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
    url: 'https://www.youtube.com/embed/jfKfPfyJRdk?si=EMcV8ZtUTOWHEQof'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Galery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const closemodal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

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
          <Item
            key={index}
            onClick={() =>
              setModal({
                isVisible: true,
                type: item.type,
                url: item.url
              })
            }
          >
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
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Icone de fechar"
              onClick={() => closemodal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} frameBorder="0"></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closemodal()}></div>
      </Modal>
    </>
  )
}

export default Galery
