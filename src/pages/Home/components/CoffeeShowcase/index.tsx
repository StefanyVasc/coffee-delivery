import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeList, CoffeeShowcaseContainer } from './styles'

export function CoffeeShowcase() {
  return (
    <CoffeeShowcaseContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeeShowcaseContainer>
  )
}
