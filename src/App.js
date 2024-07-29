import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import SignIn from './features/Auth/pages/SignIn';
import Home from './features/Home/pages';
import Admin from './features/Admin/pages';
import { auth } from './Firebase/config';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  // useEffect(() => {
  //   const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
  //     if (!user) {
  //       // user has been logged out.
  //       console.log('user has been logged out.');
  //       return
  //     }

  //     console.log('user', user);

  //     const token = await user.getIdToken();
  //     console.log('token', token);
  //     setIsSignedIn(!!user);
  //   });

  //   // Make sure we un-register Firebase observers when the component unmounts.
  //   return () => unregisterAuthObserver();
  // }, []);

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      // user has been logged out.
      console.log('user has been logged out.');
      setIsSignedIn(false);
      return
    }

    // const token = currentUser.getIdToken();
    const token = currentUser.accessToken;
    setIsSignedIn(true);
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/admin' element={isSignedIn ? <Admin /> : <Navigate to="/sign-in" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
