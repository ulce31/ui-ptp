import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import Session from 'supertokens-auth-react/recipe/session';
import { App } from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
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
root.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript />
      <SuperTokensWrapper>
        <App />
      </SuperTokensWrapper>
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
