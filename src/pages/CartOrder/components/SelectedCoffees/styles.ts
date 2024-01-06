import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;

  & .wrapper {
    max-height: 335px;
    overflow-y: auto;
    margin-bottom: 20px;
    min-width: 380px;
  }
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const EmptyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
      margin-bottom: 10px;
    }

    div {
      background: ${({ theme }) => theme.colors['brand-yellow-light']};
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-bottom: 20px;
      -webkit-box-shadow: 1px 0px 5px 1px rgba(219, 172, 44, 0.66);
      -moz-box-shadow: 1px 0px 5px 1px rgba(219, 172, 44, 0.66);
      box-shadow: 1px 0px 5px 1px rgba(219, 172, 44, 0.66);

      svg {
        fill: ${({ theme }) => theme.colors['brand-yellow-dark']};
      }
    }
  }
`

export const Navigation = styled.div`
  margin-top: 20px;

  > a {
    margin-top: 10px;
    text-decoration: wavy;

    p {
      margin-top: 30px;
      display: inline-block;
      position: relative;
      text-decoration: none;
      padding: 10px;
      border-radius: 8px;
      color: ${({ theme }) => theme.colors['brand-yellow-dark']};
      background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
    }

    p:hover {
      color: ${({ theme }) => theme.colors['base-white']};
      background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    }
  }
`
