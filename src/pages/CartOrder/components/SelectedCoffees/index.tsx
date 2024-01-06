import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCardCart'
import { ConfirmationSection } from './ConfirmationSection'
import { EmptyCardCart } from './EmptyCardCart'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailsContainer>
        <div className="wrapper">
          {cartItems.length === 0 ? (
            <EmptyCardCart />
          ) : (
            cartItems.map((item) => (
              <CoffeeCartCard key={item.id} coffee={item} />
            ))
          )}
        </div>
        {cartItems.length !== 0 && <ConfirmationSection />}
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
