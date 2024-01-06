import { SmileySad } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { EmptyContainer, Navigation } from './styles'
import { RegularText } from '../../../../components/Typography'

export function EmptyCardCart() {
  return (
    <EmptyContainer className="TESTE">
      <div>
        <RegularText color="subtitle">Ahh que pena...</RegularText>
        <div>
          <SmileySad size={32} />
        </div>
        <RegularText color="subtitle">
          Parece que você não adicionou nada ao carrinho...
        </RegularText>
      </div>
      <Navigation>
        <RegularText size="s">Não deixe de provar os nossos cafés.</RegularText>
        <NavLink to="/">
          <RegularText weight={800}>Acesse catálogo</RegularText>
        </NavLink>
      </Navigation>
    </EmptyContainer>
  )
}
