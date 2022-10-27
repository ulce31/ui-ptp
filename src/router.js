import { createBrowserRouter } from 'react-router-dom';

import { Login } from './pages/Login';

export default createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
]);
