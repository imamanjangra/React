import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,createRoutesFromElements ,  Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Component/Home/Home.jsx'
import Men from './Component/Men/Men.jsx'
import Women from './Component/Women/Women.jsx'
import Kids from './Component/Kids/Kids.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/Men' element={<Men/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Kids' element={<Kids/>}/>
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
