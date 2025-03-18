import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './components/Forms'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  

  return (
    <>
      <ToastContainer position="bottom-right" />
      <Forms />
    </>
  )
}

export default App
