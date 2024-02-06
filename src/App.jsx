import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Form from './components/Form'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Login/> 
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/form",
    element: <Form/>
  }
]); 
function App() {

  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
