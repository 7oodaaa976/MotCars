import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "./Layout/MainLayout"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Cars from './Pages/Cars/Cars';
import Motors from './Pages/Motors/Motors';
import Notfound from './Pages/Notfound/Notfound';

const routes =createBrowserRouter([
  {
    path: "", element: <MainLayout />, children: [
      { index: true, element: <Home /> },
      {path:"about",element:<About/>},
      {path:"cars",element:<Cars/>},
      {path:"motors",element:<Motors/>},
      {path:"*",element:<Notfound/>}

    ]
  }
])
function App() {

  return (
    <>
    <RouterProvider router={routes}/>

    </>
  )
}

export default App
