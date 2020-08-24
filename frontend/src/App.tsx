import React, { createContext} from 'react'
import { BrowserRouter } from 'react-router-dom'
import Route from './routes/routes'
import AuthProvider from './hooks'
import './App.css'

const token: { token: string } = {
  token: ""
}

const tokenContext = createContext(token)

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