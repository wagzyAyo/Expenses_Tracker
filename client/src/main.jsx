import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  RouterProvider, 
  Route, 
  createBrowserRouter,
  createRoutesFromElements} from "react-router-dom"
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./index.css"
import HomeScreen from './screens/homeScreen.jsx'
import LonginScreen from './screens/longinScreen.jsx'
import SignupScreen from './screens/signupScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<LonginScreen />}></Route>
      <Route path='/signup' element={<SignupScreen />}></Route>
      <Route path='/home' element={<HomeScreen />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
