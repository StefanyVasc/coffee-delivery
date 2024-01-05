import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  cartQuantity: number
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

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
