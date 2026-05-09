import { useState, useEffect } from 'react'

import './App.css'

import axios from 'axios'

function App() {
  const [items, setItems] = useState([])

  const [newItemName, setNewItemName] = useState('')

  useEffect( () => {
    axios.get("http://localhost:5000/api/items")
      .then(res => setItems(res.data))
        .catch(err => console.log(err))
  }, [])

  const addNewItem = () => {
    axios.post("http://localhost:5000/api/items", {email: newItemName, password: "987654321"})
      .then(res => {
        setItems([...items, res.data])
        setNewItemName('')
      })
        .catch(err => console.log("Error adding item:", err));
  }

  const deleteItem = (id) => {
    axios.delete(`http://localhost:5000/api/items/${id}`)
      .then(()=> {
          const updatedItems = items.filter(item=> item._id != id)
          setItems(updatedItems)
        })
        .catch(err => console.log("Delete error:", err))
  }

  return (
    <>
      <div>
        <div>
          <input type="text" value={newItemName} onChange={(e)=>{setNewItemName(e.target.value)}} placeholder='Add new item here...'/>
          <button onClick={addNewItem}>Add item</button>
        </div>
        <h1>My Items</h1>
        <ul>
          {items.map(item => <li onClick={()=>{deleteItem(item._id)}} key={item._id}>{item.email}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
