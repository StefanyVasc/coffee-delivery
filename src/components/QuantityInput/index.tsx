import { QuantityInputContainer, IconWrapper } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={18} weight="bold" />
      </IconWrapper>

      <input type="number" readOnly value={quantity} />

      <IconWrapper onClick={onIncrease}>
        <Plus size={18} weight="bold" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
