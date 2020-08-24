import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Route from './routes/routes'
import AuthProvider from './hooks'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Route />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App