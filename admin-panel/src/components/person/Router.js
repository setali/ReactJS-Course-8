import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Full from './Full'
import List from './List'
// import New from './New'
const New = React.lazy(() => import('./New'))

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/:id' element={<Full />} />
      <Route
        path='/new'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <New />
          </Suspense>
        }
      />
    </Routes>
  )
}
