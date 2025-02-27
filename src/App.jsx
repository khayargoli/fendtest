import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>

  )
}

export default App
