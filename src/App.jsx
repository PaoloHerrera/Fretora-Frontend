import NavbarAnon from './components/NavbarAnon'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <NavbarAnon />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </main>
    </>
  )
}
