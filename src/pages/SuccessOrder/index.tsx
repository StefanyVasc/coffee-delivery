import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { RegularText, TitleText } from '../../components/Typography'
import { OrderDetailsContainer, SuccessOrderContainer } from './styles'
import Delivery from '../../assets/Delivery.svg'
import { useTheme } from 'styled-components'

export function SuccessOrderPage() {
  const { colors } = useTheme()

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
                Entrega em
                {/* Entrega em <strong>{state.street}</strong>, {state.number} */}
                <br />
                {/* {state.district} - {state.city}, {state.uf} */}
                Cordeiro - Recife, PE
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
                {/* <strong>{paymentMethods[state.paymentMethod].label}</strong> */}
                <strong>Cartão de crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={Delivery} />
      </section>
    </SuccessOrderContainer>
  )
}
