import { TitleText } from '../../../../components/Typography'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeList, CoffeeShowcaseContainer } from './styles'

export function CoffeeShowcase() {
  return (
    <CoffeeShowcaseContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </CoffeeShowcaseContainer>
  )
}
