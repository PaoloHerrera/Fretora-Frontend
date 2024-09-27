import NavbarAnon from './components/NavbarAnon'
import HomePage from './pages/HomePage/HomePage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <NavbarAnon />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/product/:type/:brand/:slug"
            element={<ProductDetailPage />}
          ></Route>
        </Routes>
      </main>
    </>
  )
}
