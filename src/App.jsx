import React from 'react';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import store from './redux/store';
import Main from './views/Main';
import './styles/style.css';

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Main />
      </Layout>
    </Provider>
  );
}
