import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
// Renders App.jsx. Note that this is what will compile all of your components. App.css gives them style.
import About from './components/AboutMe/AboutMe.jsx'
import Contact from './components/Contact/Contact.jsx'
import Resume from './components/Resume/Resume.jsx'
import Wips from './components/Resume/Resume.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'wips',
        element: <Wips />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

//Renders at root meaning that everything that I will pass from App will be applied at the root. Note that if I add additional pages or
//Anything that will take me from root, that will break the components unless reloaded so be careful.

//Set up router DOM.
