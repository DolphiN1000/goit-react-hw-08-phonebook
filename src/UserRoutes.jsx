import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FidgetSpinner } from 'react-loader-spinner';

const Phonebook = lazy(() => import('components/Phonebook/Phonebook'));
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
        <Route path="/" element={<Phonebook />} />
        {/* <Route path="/register" element={<MoviesPage />} />
        <Route path="/login" element={<MovieDetails />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
