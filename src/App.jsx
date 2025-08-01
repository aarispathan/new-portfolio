import React, { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from "react-toastify";
import ScrollTop from './components/scrollTop/ScrollTop';
import Preloader from './components/loader/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <ToastContainer autoClose={3000} />
          <AppRoutes />
          <ScrollTop />
        </>
      )}
    </>
  );
}

export default App;
