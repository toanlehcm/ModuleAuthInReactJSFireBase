import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import SignIn from './features/Auth/pages/SignIn';
import Home from './features/Home/pages';
import { auth } from '../src/Firebase/config'
import Admin from './features/Admin/pages';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        // user has been logged out.
        console.log('user has been logged out.');
        return
      }

      console.log('user', user);

      const token = await user.getIdToken();
      console.log('token', token);
      setIsSignedIn(!!user);
    });

    // Make sure we un-register Firebase observers when the component unmounts.
    return () => unregisterAuthObserver();
  }, []);

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
