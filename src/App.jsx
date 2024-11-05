import React from 'react'
import Email from './components/email'
import Password from './components/Password'
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Email/>}/>
        <Route path='/reset' element={<Password/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
