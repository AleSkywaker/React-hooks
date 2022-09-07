import { Navigate, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { AboutPage, LoginPage, HomePage } from './pages';
import { NavBar } from './pages/components/NavBar';

export const MainApp = () => {
  return (
    <UserProvider>
      <h3>useContext Main App</h3>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
    </UserProvider>
  );
};
