import React, { useEffect, useState } from 'react'
import Prop from './Props/Prop'
import "./App.css"

function App() {
  const [friends, setFriends] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Emma" },
    { id: 3, name: "Michael" },
    { id: 4, name: "Sophia" },
    { id: 5, name: "David" }
  ])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const deleteBtn = (i) => {
    const remainingFriends = [...friends];
    remainingFriends.splice(i, 1);
    setFriends(remainingFriends);
  }

  return (
    <div>
      {
        loading ? (
          <p>Loading Friends ....</p>
        ) : friends.length === 0 ? (
          <p>No Friends</p>
        ) : (
          friends.map((friend, i) => (
            <div key={friend.id}>
              <Prop data={friend} />
              <button onClick={() => deleteBtn(i)}>Delete</button>
            </div>
          ))
        )
      }
    </div>
  )
}
export default App
