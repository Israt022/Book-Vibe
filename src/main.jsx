import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routers'
import { ToastContainer } from 'react-toastify'
import BookProvider from './context/BookProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
    </BookProvider>

    {/* Toastify */}
    <ToastContainer 
      position="top-center"
    />
  </StrictMode>,
)
