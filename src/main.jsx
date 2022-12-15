import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { persistStore } from 'redux-persist';
import { initClient } from './lib/initQuery';
import configureStore from './configureStore'
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from "./theme/index";
import App from "./components/App";
import meta from '../package.json';

console.log(process.env.NODE_ENV) // eslint-disable-line no-console
console.info(`${meta.name}@${meta.version}`); // eslint-disable-line no-console

const state = {};
const store = configureStore(state);
const persistor = persistStore(store)

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

const client = initClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={client}>
              <App />
              <ReactQueryDevtools initialIsOpen={true} />
            </QueryClientProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
