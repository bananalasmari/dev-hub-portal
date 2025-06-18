import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// استيراد الصفحات
import Home from './pages/Home';
import Tools from './pages/Tools';
import Components from './pages/Components';
import APIs from './pages/APIs';
import Survey from './pages/Survey';

// إنشاء الراوتر
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/tools', element: <Tools /> },
  { path: '/components', element: <Components /> },
  { path: '/apis', element: <APIs /> },
  { path: '/survey', element: <Survey /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);