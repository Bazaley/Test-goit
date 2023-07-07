import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from 'HOCs/PrivateRoute';
import PublicRoute from 'HOCs/PublicRoute';

const Home = lazy(() => import('pages/Home/Home'));
// const AddContacts = lazy(() => import('pages/AddContacts/AddContacts'));
// const Contacts = lazy(() => import('pages/Contacts/Contacts'));
// const Register = lazy(() => import('pages/Register/Register'));
// const Login = lazy(() => import('pages/Login/Login'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
