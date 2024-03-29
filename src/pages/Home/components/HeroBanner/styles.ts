import styled from 'styled-components'
import HeroBg from '../../../../assets/HeroBg.svg'
import { TitleText } from '../../../../components/Typography'
import { rgba } from 'polished'

export const HeroContainer = styled.section`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;

  background: ${({ theme }) => `url(${HeroBg}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors['base-white']} 0%,
      ${rgba(theme.colors['base-background'], 0.2)} 50%,
      ${theme.colors['base-background']} 100%
  )`};
`
export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const HeroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
