import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
