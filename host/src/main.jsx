import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

const RemoteComponent = lazy(() => import('remote/MyComponent'));

const Main = () => (
  // <Suspense fallback="Loading...">
  //   <RemoteComponent />
  // </Suspense>
  <App />
);

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
