import {createBrowserRouter} from 'react-router-dom'
import WebLayout from '../layouts/WebLayout'
import HomePage from '../pages/HomePage'
import Sections from '../pages/Sections'
import Register from '../pages/Register'
import ContactUs from '../pages/ContactUs'
import TopHotels from '../pages/TopHotels'

const Index = createBrowserRouter([
  {
  path: "/",
  element: <WebLayout />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    
  {
    path: "/explore",
    element: <Sections />
  },
  {
    path: "/register",
    element:<Register />
  },
  {
    path: "/contact",
    element: <ContactUs />
  },
  {
    path: "/exploremore",
    element: <Sections />
  },
  {
    path: "/homepage",
    element: <HomePage />
  }
  ]
  }
])
export default Index