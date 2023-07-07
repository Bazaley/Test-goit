import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/App';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

import { GlobalStyles } from 'globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </>
);
{
  /* <React.StrictMode>
</React.StrictMode> */
}
