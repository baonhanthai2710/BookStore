import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'

const App = () => {
  return (
    <div>
      <main className='overflow-hidden bg-primary'>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
