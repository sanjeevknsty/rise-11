import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router'
import Sidebar from './components/Home/Sidebar.jsx'
import { Box } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Box sx={{display:"flex"}}>

   <Sidebar/>
   <App/>
  </Box>
  </BrowserRouter>
)
