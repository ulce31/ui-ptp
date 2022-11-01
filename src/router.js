import { createBrowserRouter } from 'react-router-dom';
import { SessionAuth } from 'supertokens-web-js/recipe/session';
import Dashboard from './pages/Dashboard';
import { redirect } from 'react-router-dom';

import { Login, action as loginAction } from './pages/Login';
import Session from 'supertokens-web-js/recipe/session';

async function doesSessionExist() {
  if (await Session.doesSessionExist()) {
    console.log('here');
    // user is logged in
    return true;
  } else {
    console.log('here');
    // user has not logged in yet
    return redirect('/');
  }
}

export default createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    action: loginAction,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);
