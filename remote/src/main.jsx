import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './MyComponent';
import "./index.css"

const App = () => <MyComponent />;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
