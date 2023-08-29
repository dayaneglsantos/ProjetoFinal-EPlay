import ProductsList from '../../Components/ProductsList'
import resident from '../../Assets/Images/resident.png'
import diablo from '../../Assets/Images/diablo.png'
import starWars from '../../Assets/Images/star_wars.png'
import zelda from '../../Assets/Images/zelda.png'
import Game from '../../Models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Título',
    description: 'Descrição completa do jogo',
    image: resident,
    categorie: 'Ação',
    infos: ['-10%', 'R$: 150,00'],
    sistem: 'Windows'
  },
  {
    id: 2,
    title: 'Título',
    description: 'Descrição completa do jogo',
    image: starWars,
    categorie: 'Aventura',
    infos: ['-25%', 'R$: 99,00'],
    sistem: 'Windows'
  },
  {
    id: 3,
    title: 'Título',
    description: 'Descrição completa do jogo',
    image: zelda,
    categorie: 'RPG',
    infos: ['-18%', 'R$: 125,00'],
    sistem: 'Windows'
  },
  {
    id: 4,
    title: 'Título',
    description: 'Descrição completa do jogo',
    image: diablo,
    categorie: 'Ação',
    infos: ['-30%', 'R$: 110,00'],
    sistem: 'Windows'
  }
]
const emBreve: Game[] = [
  {
    id: 1,
    title: 'Título',
    description: 'Descrição completa do jogo',
    image: resident,
    categorie: 'Ação',
    infos: ['-10%', 'R$: 150,00'],
    sistem: 'Windows'
  },
  {
    id: 2,
    title: 'Título',
    description: 'Descrição completa do jogo',
    image: starWars,
    categorie: 'Aventura',
    infos: ['-25%', 'R$: 99,00'],
    sistem: 'Windows'
  },
  {
    id: 3,
    title: 'Título',
    description: 'Descrição completa do jogo',
    image: zelda,
    categorie: 'RPG',
    infos: ['-18%', 'R$: 125,00'],
    sistem: 'Windows'
  },
  {
    id: 4,
    title: 'Título',
    description: 'Descrição completa do jogo',
    image: diablo,
    categorie: 'Ação',
    infos: ['-30%', 'R$: 110,00'],
    sistem: 'Windows'
  }
]

const Categories = () => (
  <>
    <ProductsList
      games={promocoes}
      backgroundColor={'gray'}
      sectionTitle="RPG"
    />
    <ProductsList
      games={emBreve}
      backgroundColor={'black'}
      sectionTitle="Ação"
    />
    <ProductsList
      games={promocoes}
      backgroundColor={'gray'}
      sectionTitle="Aventura"
    />
    <ProductsList
      games={emBreve}
      backgroundColor={'black'}
      sectionTitle="FPS"
    />
  </>
)

export default Categories
