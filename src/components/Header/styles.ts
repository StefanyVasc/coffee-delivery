import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  max-width: 1120px;
  padding: 32px 20px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  .address {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 10px 8px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.purpleLight};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      color: ${({ theme }) => theme.colors.purpleDark};
    }
  }

  .cart {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 6px;
    position: relative;

    background-color: ${({ theme }) => theme.colors.yellowLight};
    color: ${({ theme }) => theme.colors.yellowDark};

    span {
      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.yellowDark};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 3px;
      right: 3px;
      transform: translate(50%, -50%);
    }
  }
`
