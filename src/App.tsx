import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
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
import { useAuth } from './hooks/useAuth';

const AppContent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={!isLoggedIn ? <Auth /> : <Navigate to="/user/home" replace />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/user" element={<HomeLayout />}>
            <Route path="*" element={<PageNotFound />} />
            <Route index element={<Navigate to="home" replace />} />
            <Route path="about" element={<About />} />
            <Route path="chat" element={<Chat />} />
            <Route path="home" element={<Home />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={isLoggedIn ? "/user/home" : "/auth"} replace />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

