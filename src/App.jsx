import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from "react-toastify";
import ScrollTop from './components/scrollTop/ScrollTop';
import Preloader from './components/loader/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <ToastContainer autoClose={3000} />
      <AppRoutes />
      <ScrollTop />
    </>
  );
}

export default App;
