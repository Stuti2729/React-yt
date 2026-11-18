import React from 'react'
import axios from 'axios'
import  { useState } from 'react';

// Local Storage => Local Storage is used to store data in the browser permanently until the user or application manually removes it.
// Session Storage => Session Storage stores data only for a particular browser tab session

const App = () => {

  // localStorage.clear() => used to clean the local storage
  // sessionStorage.clear() to clear session storage

  localStorage.setItem('user', 'Stuti') // to store data in key value pair

  //  localstorage mei value humesha string form mei honi chahiye
  const user2 = {
    name: 'stuti',
    city: 'dehradun'
  }
  localStorage.setItem('user2', JSON.stringify(user2))

  const user = localStorage.getItem('user') // to access the data we use keys
  localStorage.setItem('age', '18')

  localStorage.removeItem('user')
  console.log(user)

  //  API Calling using fetch

  const getdata = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
    const data = await response.json()
    console.log(data)
  }

  //Using Axios
  const getData2 = async () => {
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(response.data)
    
  }

   const [data, setData] = useState([])

  const getData = async () => {
    
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data)
    
  }
  return (

    <div>
      <button onClick={getData2}>Get Data</button>
       <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){

          return <h3>Hello, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
