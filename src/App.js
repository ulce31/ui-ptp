import React from 'react';
import { SessionAuth } from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Gear } from './pages/Gear';
import Dashboard from './pages/Dashboard';
/* import { Gear } from './pages/Gear'; */
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <SessionAuth>
              <Dashboard />
            </SessionAuth>
          }
        />
        <Route path="/gears" element={<Gear />} />
      </Routes>
    </BrowserRouter>
  );
};
