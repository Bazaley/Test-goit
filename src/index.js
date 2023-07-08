import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { GlobalStyles } from 'globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </>
);
