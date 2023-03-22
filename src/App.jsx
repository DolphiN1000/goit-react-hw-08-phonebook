import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Navbar from './components/Phonebook/Navbar/Navbar';
import AuthLayout from './components/Phonebook/AuthLayout/AuthLayout';
import UserRoutes from './UserRoutes';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <AuthLayout>
            <Navbar />
            <UserRoutes />
          </AuthLayout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
