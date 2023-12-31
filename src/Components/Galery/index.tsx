import { useState } from 'react'
import play from '../../Assets/Images/play.png'
import zoom from '../../Assets/Images/zoom.png'
import close from '../../Assets/Images/fechar.png'
import * as S from './styles'

interface ModalState extends GalleryItem {
  isVisible: boolean
}

type Props = {
  defaultCover: string
  name: string
  itemsList: GalleryItem[]
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

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <S.Items>
        {itemsList.map((item, index) => (
          <S.Item
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
            <S.Actions>
              <img src={getMediaIcon(item)} alt="Ampliar mídia" />
            </S.Actions>
          </S.Item>
        ))}
      </S.Items>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Icone de fechar" onClick={closemodal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} frameBorder="0"></iframe>
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closemodal}></div>
      </S.Modal>
    </>
  )
}

export default Galery
