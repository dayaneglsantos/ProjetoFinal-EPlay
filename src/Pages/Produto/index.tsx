import { useParams } from 'react-router-dom'

const Produto = () => {
  const parametros = useParams()
  return <div>Produto {parametros.id}</div>
}

export default Produto
