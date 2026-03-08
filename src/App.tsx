import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Auth from './components/Auth';
import Home from './components/Home';
import HomeLayout from './components/HomeLayout';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import ProtectedRoutes from './components/ProtectedRoutes';
import Chat from './components/Chat';
import Notifications from './components/Notifications';
import Settings from './components/Settings';

let isLoggedIn = false;

  const setUser =()=>{
    const user = localStorage.getItem('user');
    const status: boolean = (user === "true");
    console.log(user, status); 
    isLoggedIn = status;
  };

  setUser();

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>

            {
              !isLoggedIn && 
              <>
                <Route path="/user" element={<Navigate to="/" />} />
                <Route path="/" element={<Navigate to="/auth" />} />
                <Route path="/auth" element={<Auth />} />
              </>
            }

            {
              isLoggedIn && 
              <>
                {/* Wrap your protected routes */}
                <Route element={<ProtectedRoutes />}>
                  <Route path="/auth" element={<Navigate to="/" />} />
                  <Route path="/" element={<Navigate to="/user" />} />
                  <Route path="/user" element={<HomeLayout />} >
                    {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
                    <Route path="*" element={<PageNotFound />} />
                    <Route index element={<Navigate to="home" replace />} />
                    <Route path="about" element={<About />} />
                    <Route path="chat" element={<Chat />} />
                    <Route path="home" element={<Home />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                  <Route path="*" element={<PageNotFound />} />
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
