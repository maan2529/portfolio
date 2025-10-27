import React from 'react'
import ScrollProvider from './context/ScrollProvider'
import Home from './components/Home'

function App() {
  return (
    <ScrollProvider>
      <Home />
    </ScrollProvider>
  )
}

export default App