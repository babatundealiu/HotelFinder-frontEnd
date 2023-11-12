import {createBrowserRouter} from 'react-router-dom'
import WebLayout from '../layouts/WebLayout'
import HomePage from '../pages/HomePage'
import Sections from '../components/blocks/Sections'
import Register from '../pages/Register'

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
    path: "/sections",
    element: <Sections />
  },
  {
    path: "/register",
    element:<Register />
  }
  ]
  }
])
export default Index