import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Home from './components/Home';
import ProtectedRoutes from './components/ProtectedRoutes';
import { useEffect } from 'react';


let isLoggedIn = false;

  const setUser =()=>{
    const user = localStorage.getItem('user');
    const status: boolean = (user === "true");
    console.log(user, status); 
    isLoggedIn = status;
  };

  setUser();

const App = () => {

  // let isLoggedIn = false;

  // const setUser =()=>{
  //   const user = localStorage.getItem('user');
  //   const status: boolean = (user === "true");
  //   console.log(user, status); 
  //   isLoggedIn = status;
  // };


  // setUser();
  

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>

            {
              !isLoggedIn && 
              <>
                <Route path="/" element={<Navigate to="/auth" />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/home" element={<Navigate to="/" />} />
              </>
            }

            {
              isLoggedIn && 
              <>
                {/* Wrap your protected routes */}
                <Route element={<ProtectedRoutes />}>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/auth" element={<Navigate to="/" />} />
                  <Route path="/home" element={<Home />} />
                </Route>
              </>
            }

          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
