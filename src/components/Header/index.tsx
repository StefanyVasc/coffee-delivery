import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Aside, HeaderContainer } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/public/assets/Logo.svg" alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div className="address">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to={`cart`} className="cart">
          <ShoppingCart size={22} weight="fill" />
          <span>1</span>
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
