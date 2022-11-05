import { Route, Routes } from 'react-router-dom'
import Core from './components/Core'
import Index from './pages'
import Detail from './pages/detail'

export default function App() {
  return (
    <div style={{ maxWidth: '65ch', margin: '0 auto' }}>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/:name' element={<Detail />} />
      </Routes>
      <Core />
    </div>
  )
}
