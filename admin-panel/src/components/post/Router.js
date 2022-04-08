import { Route, Routes } from 'react-router-dom'
import Full from './Full'
import List from './List'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/:id' element={<Full />} />
    </Routes>
  )
}
