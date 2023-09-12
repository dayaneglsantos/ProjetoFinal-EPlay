import { useState } from 'react'
import play from '../../Assets/Images/play.png'
import zoom from '../../Assets/Images/zoom.png'
import close from '../../Assets/Images/fechar.png'
import { Actions, Item, Items, Modal, ModalContent } from './styles'

interface GaleryItem {
  type: 'image' | 'video'
  url: string
}

interface ModalState extends GaleryItem {
  isVisible: boolean
}

type Props = {
  defaultCover: string
  name: string
  itemsList: GaleryItem[]
}

const Galery = ({ defaultCover, name, itemsList }: Props) => {
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
        {itemsList.map((item, index) => (
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
