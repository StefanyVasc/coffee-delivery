import { CoffeeShowcase } from './components/CoffeeShowcase'
import { HeroBanner } from './components/HeroBanner'
import { HomeContainer } from './style'

export function HomePage() {
  return (
    <HomeContainer>
      <HeroBanner />
      <CoffeeShowcase />
    </HomeContainer>
  )
}
