import { TitleText } from '../../../../components/Typography'
import { CoffeeCartCard } from '../CoffeeCardCart'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <p>itens</p>
        <CoffeeCartCard />
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
