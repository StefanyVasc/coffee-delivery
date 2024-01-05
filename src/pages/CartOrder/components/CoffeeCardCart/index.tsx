import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { Trash } from '@phosphor-icons/react'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        {/* <img src={`/coffees/${coffee.photo}`} alt="" /> */}
        <div>
          <RegularText color="subtitle">café 1</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={() => {}}
              onDecrease={() => {}}
              quantity={1}
              size="small"
            />
            <RemoveButton type="button" onClick={() => {}}>
              <Trash size={16} />
              remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,99</p>
    </CoffeeCartCardContainer>
  )
}
