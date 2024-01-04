import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import {
  CoffeeListContainer,
  Heading,
  HeroContainer,
  HeroContent,
  InfoContainer,
} from './style'
import { Card } from '../../components/Card'
import { coffees } from '../../../data.json'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <InfoContainer>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellowDark }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.baseText }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </InfoContainer>
          </div>
          <img
            src="/public/assets/HeroImage.svg"
            alt="Café do Coffee Delivery"
          />
        </HeroContent>
        <img src="/public/assets/HeroBg.svg" alt="" id="hero-bg" />
      </HeroContainer>

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeListContainer>
    </div>
  )
}
