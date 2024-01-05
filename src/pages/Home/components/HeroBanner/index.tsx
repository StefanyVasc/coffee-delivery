import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import {
  BenefitsContainer,
  HeroContainer,
  HeroContent,
  HeroTitle,
} from './styles'
import HeroImg from '../../../../assets/HeroImage.svg'

export function HeroBanner() {
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </HeroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconbg={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconbg={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconbg={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconbg={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>
        <img src={HeroImg} alt="" />
      </HeroContent>
    </HeroContainer>
  )
}
