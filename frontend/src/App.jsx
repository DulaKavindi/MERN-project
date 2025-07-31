import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to PSR Vlog</h1>
      <button onClick={()=> navigate('/Users')}>Users</button>

    </>
  )
}

export default App
