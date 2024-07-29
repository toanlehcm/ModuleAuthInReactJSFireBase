import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import SignIn from './features/Auth/pages/SignIn';
import Home from './features/Home/pages';
import Admin from './features/Admin/pages';

function App() {
  // const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
