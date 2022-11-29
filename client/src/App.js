import React, { useEffect, lazy, Suspense, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { UserContext } from './context/userContext';
import Navbar from './components/Home/Navbar';
import Home from './components/Home/Home';
import Manager from './components/Manager';
import Salesperson from './components/Salesperson';
import Customer from './components/Customer';

const Signup = lazy(() => import('./components/Signup'));
const Login = lazy(() => import('./components/Login'));
// const Footer = lazy(() => import('./components/Home/Footer'));

function App() {

  // const { updateUser } = useContext(UserContext)

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     updateUser(user);
  //   });
  // }, []);

  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route exact path="/" element={<Suspense><Home /></Suspense>} />
          <Route exact path="/signup" element={<Suspense><Signup /></Suspense>} />
          <Route exact path="/login" element={<Suspense><Login /></Suspense>} />
          <Route exact path="/manager" element={<Suspense><Manager /></Suspense>} />
          <Route exact path="/customer" element={<Suspense><Customer /></Suspense>} />
          <Route exact path="/salesperson" element={<Suspense><Salesperson /></Suspense>} />
        </Routes>

        {/* <Suspense><Footer /></Suspense> */}
      </BrowserRouter>

    </>
  );
}

export default App;
