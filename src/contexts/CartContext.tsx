import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCoffeeToCartById: (cartItemId: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      coffeeAlreadyExistsInCart
        ? draft.push(coffee)
        : (draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity)
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const actualItem = draft[coffeeExistsInCart]

        draft[coffeeExistsInCart].quantity =
          type === 'increase'
            ? actualItem.quantity + 1
            : actualItem.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCoffeeToCartById(cartItemId: number) {
    const coffeeToBeRemoved = cartItems.findIndex(
      (cartItem) => cartItem.id === cartItemId,
    )

    if (coffeeToBeRemoved !== -1) {
      const newCart = produce(cartItems, (draft) => {
        draft.splice(coffeeToBeRemoved, 1)
      })

      setCartItems(newCart)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCoffeeToCartById,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
