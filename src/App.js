import React, { useEffect, Fragment } from 'react';
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import Session, { SessionAuth } from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/session/appinfo
    appName: 'ptp',
    apiDomain: 'http://localhost:3000',
    websiteDomain: 'http://localhost:3001',
    apiBasePath: '/',
    websiteBasePath: '/',
  },
  recipeList: [Session.init()],
});
export const App = () => {
  return (
    <SuperTokensWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <SessionAuth
                requireAuth={true}
                redirectToLogin={() => {
                  window.history('/');
                }}
              >
                <Dashboard />
              </SessionAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </SuperTokensWrapper>
  );
};
