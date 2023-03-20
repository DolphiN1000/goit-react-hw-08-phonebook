import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Phonebook from 'components/Phonebook/Phonebook';

import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Navbar from 'components/Phonebook/Navbar/Navbar';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <Provider store={store}>
      <Phonebook />
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Navbar />
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
