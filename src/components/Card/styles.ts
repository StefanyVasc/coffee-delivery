import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.baseCard};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const CoffeeTags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.yellowLight};
    color: ${({ theme }) => theme.colors.yellowDark};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`

export const CoffeeTitle = styled.h3`
  margin-top: 16px;

  color: ${({ theme }) => theme.colors.baseSubtitle};
  ${mixins.fonts.titleS}
`

export const CoffeeDescription = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${({ theme }) => theme.colors.baseLabel};
  ${mixins.fonts.textS}
`

export const CardControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`

export const PriceTag = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors.baseText};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors.baseText};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors.yellowDark : theme.colors.purpleDark};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.purple};
    }
  }
`
