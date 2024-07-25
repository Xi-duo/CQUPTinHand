import './data';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import AddSchedule from './components/AddSchedule';
import AppLayout from './components/AppLayout';
import Arrange from './components/arrange';
import Home from './components/home';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout></AppLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'arrange',
        element: <Arrange />,
      },
      { path: 'arcade', element: <></> },
      { path: 'user', element: <></> },
      { path: 'add', element: <AddSchedule /> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
