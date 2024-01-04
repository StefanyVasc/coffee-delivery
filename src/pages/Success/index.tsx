import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import {
  Heading,
  InfoContainer,
  InfoContent,
  Order,
  OrderContainer,
} from './style'
import { useParams } from 'react-router-dom'

export function Success() {
  const theme = useTheme()
  const { orderId } = useParams()

  return (
    <OrderContainer>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <InfoContainer>
          <InfoContent>
            <div>
              <MapPin
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
                size={32}
              />

              <div>
                <span>
                  Entrega em
                  <strong>Rua João Daniel Martinelli, 012</strong>
                </span>

                <span>Bairro - Cidade, Estado</span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellowDark }}
                size={32}
              />

              <div>
                <span>Pagamento na entrega</span>
                <strong>Cartão de crédito</strong>
              </div>
            </div>
          </InfoContent>
        </InfoContainer>
      </Order>

      <img src="/public/assets/Delivery.svg" alt="Pedido concluído" />
    </OrderContainer>
  )
}
