import { createBrowserRouter } from 'react-router-dom';
import { SessionAuth } from 'supertokens-auth-react/recipe/session';
import Dashboard from './pages/Dashboard';

import { Login, action as loginAction } from './pages/Login';

export default createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    action: loginAction,
  },
  {
    path: '/dashboard',
    element: (
      <SessionAuth>
        <Dashboard />
      </SessionAuth>
    ),
  },
]);
