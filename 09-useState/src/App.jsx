// Understanding hooks =>React Hooks special functions hote hain jo functional components ko React ki features use karne ki permission dete hain.

//1. useState => agar tumhe apni website par koi value change karni hai aur uska updated result screen par dikhana hai, toh useState use karte hain.

// 2. useEffect=>useEffect ka use component ke render hone ke baad side effects perform karne ke liye hota hai.

// React chahta hai sab kuch uske through ho 😁
//3. useRef => useRef ka use DOM elements ko directly access karne aur aisi values store karne ke liye hota hai jo renders ke beech persist karti hain.

// 4. useContext=> ka use components ke beech data share karne ke liye hota hai bina har intermediate component mein props pass kiye.

//5. useMemo => ka use expensive calculations ke result ko cache (store) karne ke liye hota hai.Simple words mein, agar koi calculation baar-baar perform ho rahi hai aur uski dependency change nahi hui, toh same calculation dobara karne ki zarurat nahi hai.

//6. useCallback => ka use function ki reference ko cache karne ke liye hota hai, taaki dependencies change na hone tak React same function reference reuse kar sake.

//7. useReducer => ka use complex state management ke liye hota hai, jahan state ko different actions ke according update karna hota hai.


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