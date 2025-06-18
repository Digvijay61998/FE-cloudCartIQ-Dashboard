import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { RootState, store, persistor } from './store';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import ThemeComponent from './theme/ThemeComponent';
import { SettingsConsumer, SettingsProvider } from './context/settingsContext';

// const { userData } = useSelector((state: RootState) => state.user);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const appConfig = {
  themeColor: 'light',
  direction: 'ltr',
  layout: 'vertical'
};
const setConfig = appConfig ?? undefined;
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <SettingsProvider
          {...(setConfig ? { pageSettings: setConfig() } : {})}
        > */}
          <SettingsConsumer>
            {({ settings }) => {
              console.log("settings",settings);
              
              return (
                <ThemeComponent settings={settings}>
                  <HelmetProvider>
                      <BrowserRouter>
                        <Toaster />
                        <App />
                      </BrowserRouter>
                  </HelmetProvider>
                </ThemeComponent>
              );
            }}
          </SettingsConsumer>
        {/* </SettingsProvider> */}

        {/* Devtools for React Query */}
        <ReactQueryDevtools initialIsOpen={false} />
      </PersistGate>
            </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
