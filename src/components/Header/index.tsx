import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={Logo} alt="Coffee Delivery" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Recife, PE
          </HeaderButton>
          <NavLink to="/cart">
            <HeaderButton variant="yellow">
              {/* {cartQuantity >= 1 && <span>{cartQuantity}</span>}
               */}
              <span>0</span>
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
