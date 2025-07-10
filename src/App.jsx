import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from "react-toastify";
import ScrollTop from './components/scrollTop/ScrollTop';

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" autoClose={3000} />
      <AppRoutes />
      <ScrollTop />
    </>
  )
}

export default App
