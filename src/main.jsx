import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './auth/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='container mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
