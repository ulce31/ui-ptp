import { createBrowserRouter, Navigate } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import { Gear } from './routes/Dashboard/Gear';

import { Login, action as loginAction } from './routes/Login';
import { action as logoutAction } from './components/Nav/NavBar';
import Index from './routes/Index';
import { Sessions } from './routes/Dashboard/Sessions';
import { Programs } from './routes/Dashboard/Programs';
import { Settings } from './routes/Dashboard/Settings';
import { Stats } from './routes/Dashboard/Stats';

import { eRoles, SessionContext } from './contexts/SessionContext';

export default createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    action: loginAction,
  },
  {
    path: '/dashboard',
    element: (
      <SessionContext.Provider value={eRoles.Athlete}>
        <Dashboard />
      </SessionContext.Provider>
    ),
    action: logoutAction,
    children: [
      {
        index: true,
        element: <Index />,
      },
      { path: 'exercices', element: <Gear /> },
      { path: 'sessions', element: <Sessions /> },
      { path: 'programs', element: <Programs /> },
      { path: 'statistics', element: <Stats /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);
