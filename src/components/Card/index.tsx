import { CheckFat, ShoppingCart, Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import {
  CardContainer,
  CardControl,
  CoffeeDescription,
  CoffeeImg,
  CoffeeTags,
  CoffeeTitle,
  Order,
  OrderWrapper,
  PriceTag,
} from './style'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    quantity > 1 && setQuantity((state) => state - 1)
  }

  function handleAddItemToCart() {
    setIsItemAdded(true)
    setQuantity(1)
    // add Context
  }

  return (
    <CardContainer>
      <CoffeeImg
        src={coffee.image}
        alt={`imagem que representa uma xícara com café do tipo ${coffee.title}`}
      />

      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTags>
      <CoffeeTitle>{coffee.title}</CoffeeTitle>

      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CardControl>
        <PriceTag>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </PriceTag>

        <Order>
          <OrderWrapper>
            <button onClick={decrementQuantity}>
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
              <Plus size={14} />
            </button>
          </OrderWrapper>

          <button disabled={isItemAdded} onClick={handleAddItemToCart}>
            {isItemAdded ? (
              <CheckFat weight="fill" size={22} color={theme.colors.baseCard} />
            ) : (
              <ShoppingCart size={22} color={theme.colors.baseCard} />
            )}
          </button>
        </Order>
      </CardControl>
    </CardContainer>
  )
}
