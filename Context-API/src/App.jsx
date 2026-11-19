// Context API  => Context API React ka feature hai jiska use components ke beech data share karne ke liye kiya jata hai, bina har component mein manually props pass kiye.
//  
import Button from './components/Button'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <div>
      <Navbar />
      <Button />
    </div>
  )
}

export default App