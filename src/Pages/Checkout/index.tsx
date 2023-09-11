import Botao from '../../Components/Button'
import Card from '../../Components/Card'
import { InputGroup, Row } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Dados de cobrança">
      <>
        <Row>
          <InputGroup>
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" />
          </InputGroup>
        </Row>
        <h3>Dados de entrega - conteúdo digital</h3>
        <Row>
          <InputGroup>
            <label htmlFor="deliveryEmail">E-mail</label>
            <input type="email" id="deliveryEmail" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirmdeliveryEmail">Confirme o e-mail</label>
            <input type="email" id="confirmdeliveryEmail" />
          </InputGroup>
        </Row>
      </>
    </Card>
    <Card title="Pagamento">
      <p>
        Ao optar por essa forma de pagamento, é importante lembrar que a
        confirmação pode levar até 3 dias úteis, devido aos prazos estabelecidos
        pelas instituições financeiras. Portanto, a liberação do código de
        ativação do jogo adquirido ocorrerá somente após a aprovação do
        pagamento do boleto.
      </p>
    </Card>
    <Botao type="button">Finalizar compra</Botao>
  </div>
)
export default Checkout
