import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CartOrderPage } from './pages/CartOrder'
import { SuccessOrderPage } from './pages/successOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartOrderPage />} />
        <Route path="/success" element={<SuccessOrderPage />} />
      </Route>
    </Routes>
  )
}
