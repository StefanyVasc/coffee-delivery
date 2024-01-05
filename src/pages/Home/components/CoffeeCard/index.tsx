import { ShoppingCart } from '@phosphor-icons/react'
import { RegularText, TitleText } from '../../../../components/Typography'
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'
import { QuantityInput } from '../../../../components/QuantityInput'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      {/* <img src={`/coffees/${coffee.photo}`} /> */}
      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>
      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9.99
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={() => {}}
            onDecrease={() => {}}
            quantity={1}
          />
          <button onClick={() => {}}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
