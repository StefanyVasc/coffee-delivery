import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethod'

export function CompleteOrderForm() {
  const { colors } = useTheme()
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete o seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
