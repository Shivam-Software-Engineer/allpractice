import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
            <BrowserRouter>
                <Routes>
                   <Route element={<Layout/>}>
                     <Route path='/' element={<Home/>} />
                   <Route path='/about' element={<About/>} />
                   <Route path='/contact' element={<Contact/>} />
                   </Route>
                </Routes>
            </BrowserRouter>
  </StrictMode>,
)
