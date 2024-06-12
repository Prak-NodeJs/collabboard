
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Mobile from './components/Mobile'


function App() {
   

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/mobile-view/:id' element={<Mobile></Mobile>}/>

    </Routes>
    </BrowserRouter>
  
  )
}

export default App
