import { useTheme } from 'styled-components'
import { useEffect } from 'react'
import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { RegularText, TitleText } from '../../components/Typography'
import { OrderDetailsContainer, SuccessOrderContainer } from './styles'
import Delivery from '../../assets/Delivery.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CartOrder'
import { paymentMethods } from '../CartOrder/components/CompleteOrderForm/PaymentMethod'

interface LocationType {
  state: OrderData
}

export function SuccessOrderPage() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  if (!state) return <></>

  return (
    <SuccessOrderContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconbg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconbg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconbg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={Delivery} />
      </section>
    </SuccessOrderContainer>
  )
}
