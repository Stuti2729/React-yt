import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Stuti Maheshwari</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ipsam facere cupiditate?</p>
      </div>
      {/* agr koi bhi variable ko print krana hai toh {} ke andr likhna hoga */}
      {Card()}
      {Navbar()}
    </div>
  )
}

export default App
