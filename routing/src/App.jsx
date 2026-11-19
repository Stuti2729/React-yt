import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'

const App = () => {
  // React Router ka use React application mein different pages ke beech navigation karne ke liye hota hai, bina poori website reload kiye.

  // Jab ek route ke andar doosre routes define kiye jaate hain, toh unhe Nested Routes kehte hain.

  // Dynamic Routes ka use tab hota hai jab URL ka kuch part change hota hai aur uske according different data display karna hota hai.

  // useNavigate ek React Router hook hai jo kisi event ya condition ke according user ko ek page se doosre page par navigate karne ke liye use hota hai.

  // Jab user koi aisa URL open karta hai jo application mein defined nahi hai, toh hum 404 Not Found page show karte hain.
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='*' element={<NotFound />}/> 
        {/* agr koi or route pr gya toh ye cvhlega */}
      </Routes>

    </div>
  )
}

export default App