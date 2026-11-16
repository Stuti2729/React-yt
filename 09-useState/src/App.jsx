import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1) //works asynchrounously
    // if we do console .log(num) -> it will print the old value 
    // if we do setNum(num)  -> react will not re render 


    // Batch update
    // setNum(prev => (prev + 1))
    // setNum(prev => (prev + 1))
    // setNum(prev => (prev + 1))
    // ye teeno chlenege pr agr hum simple setNum(num+1) likhte toh ek hi bar chlta
  }
  function decreaseNum() {
    setNum(num-1)
  }
  function jump5Num() {
    setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>Increas by 5</button>
    </div>
  )
}

export default App