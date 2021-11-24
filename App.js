import React from 'react';
import { Provider } from 'react-redux';
import Layout from './app/navigation';
import { store } from './app/store';
import 'react-native-gesture-handler';
// import ForgotPassword from './app/screens/ForgotPassword';

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
