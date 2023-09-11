import { useState } from 'react'
import Botao from '../../Components/Button'
import Card from '../../Components/Card'
import { InputGroup, Row, TabButton } from './styles'
import cartao from '../../Assets/Images/cartao.svg'
import boleto from '../../Assets/Images/boleto.svg'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
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
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Boleto" />
            Cartão de crédito
          </TabButton>
          <div>
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input type="text" id="cardOwner" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="CpfOwner">CPF do titular do cartão</label>
                    <input type="text" id="CpfOwner" />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input type="text" id="cardDisplayName" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input type="text" id="cardNumber" />
                  </InputGroup>
                  <InputGroup maxWidth="124px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input type="text" id="expiresMonth" />
                  </InputGroup>
                  <InputGroup maxWidth="124px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input type="text" id="expiresYear" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input type="text" id="cardCode" />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="installments">Parcelamento</label>
                    <select name="installments" id="installments">
                      <option>2x de R$ 150,00</option>
                      <option>2x de R$ 150,00</option>
                      <option>2x de R$ 150,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <Row>
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              </Row>
            )}
          </div>
        </>
      </Card>
      <Botao type="button">Finalizar compra</Botao>
    </div>
  )
}
export default Checkout
