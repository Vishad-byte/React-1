import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx' 
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "About",
//         element: <About/>
//       },
//       {
//         path: "Contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path = '' element = {<Home/>} />
      <Route path = 'About' element = {<About/>} />
      <Route path = 'Contact' element = {<Contact/>} />
      <Route path = 'User/:userid' element = {<User/>} />
      {/* <Route path = 'Github' element = {<Github/>} /> */}
      <Route loader = {githubInfoLoader}            //loader has the functionality to fetch the api even before the github option is clicked....it starts fetching when we hover our mouse over Github which enhances the optimisation and load that page faster
      path = 'Github'
      element = {<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
