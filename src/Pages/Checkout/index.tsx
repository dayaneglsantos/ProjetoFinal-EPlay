import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Botao from '../../Components/Button'
import Card from '../../Components/Card'

import cartao from '../../Assets/Images/cartao.svg'
import boleto from '../../Assets/Images/boleto.svg'

import { usePurchaseMutation } from '../../Services/api'

import { InputGroup, P, Row, TabButton } from './styles'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Mínimo de 5 caracteres')
        .required('Campo obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      cpf: Yup.string()
        .min(14, 'Deve conter 14 caracteres')
        .max(14, 'Deve conter 14 caracteres')
        .required('Campo obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('Campo obrigatório'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      cpfOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.name,
          email: values.email,
          document: values.cpf
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          card: {
            active: payWithCard,
            owner: {
              name: values.cardOwner,
              document: values.cpfOwner
            },
            name: values.cardDisplayName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            },
            code: Number(values.cardCode)
          },
          installments: values.installments
        },
        products: [
          {
            id: 1,
            price: 120
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const alterado = fieldName in form.touched
    const invalido = fieldName in form.errors

    if (alterado && invalido) return message
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito obrigado">
          <>
            <P>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data} <br />
              Forma de pagamento:
              {payWithCard ? ' Cartão de crétido' : ' Boleto bancário'} <br />
            </P>
            <P>
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo
            </P>
            <P>
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </P>
            <P>
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </P>
            <P>
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </P>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="name">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('name', form.errors.name)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('email', form.errors.email)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
                </InputGroup>
              </Row>
              <h3>Dados de entrega - conteúdo digital</h3>
              <Row>
                <InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'deliveryEmail',
                      form.errors.deliveryEmail
                    )}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    type="email"
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'confirmDeliveryEmail',
                      form.errors.confirmDeliveryEmail
                    )}
                  </small>
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

              {payWithCard ? (
                <>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardOwner">
                        Nome do titular do cartão
                      </label>
                      <input
                        type="text"
                        id="cardOwner"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardOwner', form.errors.cardOwner)}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cpfOwner">CPF do titular do cartão</label>
                      <input
                        type="text"
                        id="cpfOwner"
                        name="cpfOwner"
                        value={form.values.cpfOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cpfOwner', form.errors.cpfOwner)}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardDisplayName">Nome no cartão</label>
                      <input
                        type="text"
                        id="cardDisplayName"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'cardDisplayName',
                          form.errors.cardDisplayName
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardNumber', form.errors.cardNumber)}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="124px">
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <input
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'expiresMonth',
                          form.errors.expiresMonth
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="124px">
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'expiresYear',
                          form.errors.expiresYear
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardCode', form.errors.cardCode)}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="installments">Parcelamento</label>
                      <select
                        name="installments"
                        id="installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      >
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
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                </Row>
              )}
            </>
          </Card>
          <Botao type="button" onClick={form.handleSubmit}>
            Finalizar compra
          </Botao>
        </form>
      )}
    </div>
  )
}
export default Checkout
