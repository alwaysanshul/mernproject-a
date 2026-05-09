import { useState, useEffect } from 'react'

import './App.css'

import axios from 'axios'

function App() {
  const [items, setItems] = useState([])

  useEffect( () => {
    axios.get("http://localhost:5000/api/items")
      .then(res => setItems(res.data))
        .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        <h1>My Items</h1>
        <ul>
          {items.map(item => <li key={item._id}>{item.email}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
