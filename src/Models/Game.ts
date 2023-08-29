class Game {
  title: string
  description: string
  image: string
  sistem: string
  categorie: string
  infos: string[]
  id: number

  constructor(
    title: string,
    description: string,
    image: string,
    sistem: string,
    categorie: string,
    infos: string[],
    id: number
  ) {
    this.title = title
    this.description = description
    this.image = image
    this.sistem = sistem
    this.categorie = categorie
    this.infos = infos
    this.id = id
  }
}

export default Game
