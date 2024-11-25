import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import Work from './Work.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import '../styles/index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';

const routes = [
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/work",
    element: <Work />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatePresence>

      <RouterProvider router={router} />
    </AnimatePresence>
  </StrictMode>
)
