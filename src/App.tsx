import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/theme'
import { Router } from './Routes'
import { BrowserRouter } from 'react-router-dom'

// import { CartContextProvider } from './contexts/CartProvider'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        {/* <CartContextProvider> */}
        <Router />
        {/* </CartContextProvider> */}
      </BrowserRouter>
    </ThemeProvider>
  )
}
