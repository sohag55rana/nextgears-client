import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
