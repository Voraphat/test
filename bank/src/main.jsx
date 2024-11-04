import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homenormal from "./components/Homenormal.jsx"
import Homeuser from "./components/Homeuser.jsx"
import Layout from "./components/Layout.jsx"
import Homeadmin from "./components/Homeadmin.jsx"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App/>
      </Layout>
    )
  },
  {
    path: "user",
    element: (
      <Layout>
        <Homeuser/>
      </Layout>
    )
  },
  {
    path: "admin",
    element: (
      <Layout>
        <Homeadmin/>
      </Layout>
    )
  },
]);



createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
