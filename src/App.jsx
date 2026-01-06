import { useState } from 'react'

import Dashboard from './pages/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Interactive dashboard </h1>
      <Dashboard />
    </>
  )
}

export default App
