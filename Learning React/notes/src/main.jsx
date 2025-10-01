    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import './index.css'
    import App from './App.jsx'
    import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
    import Layout from './Layout/Layout.jsx'
    import Home from './Component/Home.jsx'
    import Notes from './Component/Notes.jsx'
    import About from './Component/About.jsx'

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='/notes' element={<Notes/>} />
          <Route path='/about' element={<About/>}/>
        </Route>
      )
    )

    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <RouterProvider router={router}/>
      </StrictMode>,
    )
