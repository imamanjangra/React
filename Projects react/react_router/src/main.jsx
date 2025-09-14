import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Layout from './Layout'

import Contact from './Components/Contact/Contact'
import User from './Components/user/User'
import Github, { gitdata } from './Components/Github/Github'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, // replace with <Layout /> if you have it
//     children: [
//       {
//         path: '',
//         element: <Home />
//       }, 
//       {
//         path: 'about',
//         element: <About />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />      {/* default route */}
      <Route path="/about" element={<About />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route loader={gitdata} path='/github' element={<Github/>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>
)
