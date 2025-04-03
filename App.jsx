import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './Pages/HomePage.jsx'
import SignIn from './Pages/SignInPage.jsx'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <main className='Main-Content'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/signin' element={<SignIn />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
