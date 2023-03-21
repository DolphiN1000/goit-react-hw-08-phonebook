import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FidgetSpinner } from 'react-loader-spinner';


const HomePage = lazy (() => import('./pages/HomePage/HomePage'))
const RegisterPage = lazy (() => import ('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy (() => import ('./pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <FidgetSpinner
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={['#ff0000', '#00ff00', '#0000ff']}
          backgroundColor="#F4442E"
        />
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
