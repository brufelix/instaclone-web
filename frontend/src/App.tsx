import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Route from './template/routes'
import './styles/App.css'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Route />
        </div>
      </BrowserRouter>
  )
}

export default App