import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import SuperTokens, { SuperTokensWrapper } from 'supertokens-web-js';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Session from 'supertokens-web-js/recipe/session';

import router from './router';

const container = document.getElementById('root');
SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/session/appinfo
    appName: 'ptp',
    apiDomain: 'http://localhost:3000',
    websiteDomain: 'http://localhost:3001',
    apiBasePath: '/',
  },
  recipeList: [Session.init()],
});
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript />
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
