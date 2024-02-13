import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import ThemeProvider from 'src/theme';

import App from './app';
import { StateProvider } from './utils/StateProvider';
import reducer, { initialState } from './utils/reducer';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <ThemeProvider>
          <StateProvider initialState={initialState} reducer={reducer}>
            <App />
          </StateProvider>
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
