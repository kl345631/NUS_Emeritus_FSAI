import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* 2. Wrap App inside BrowserRouter to enable routing features */}
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </StrictMode>
  
  <StrictMode>
      <App />
  </StrictMode>
);
