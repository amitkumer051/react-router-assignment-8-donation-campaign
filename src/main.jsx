import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './componants/MainLayout/MainLayout';
import Home from './componants/Home/Home';
import Donation from './componants/Donation/Donation';
import Statistics from './componants/Statistics/Statistics';
import ErrorPage from './componants/ErrorPage/ErrorPage';
import DetailsOfCards from './componants/DetailsOfCards/DetailsOfCards';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        loader:()=> fetch('./data.json'),
        element: <Home></Home>
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/cards/:id',
        element: <DetailsOfCards></DetailsOfCards>,
        loader:()=> fetch('./data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
