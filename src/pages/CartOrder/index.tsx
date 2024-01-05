import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CartOrderContainer } from './styles'

export function CartOrderPage() {
  return (
    <CartOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CartOrderContainer>
  )
}
