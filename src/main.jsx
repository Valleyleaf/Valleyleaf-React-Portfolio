import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Main from './components/Main/Main.jsx'
import Contact from './components/Contact/Contact.jsx'
import Projects from './components/Projects/Projects.jsx'
import Stack from './components/Stack/Stack.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
            {
        path: 'About',
        element: <Main />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'stack',
        element: <Stack />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

