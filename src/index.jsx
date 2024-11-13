import { createRoot } from 'react-dom/client';
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { CentersPage } from './pages/CentersPage';
import { CentersDetail } from './components/CentersDetail';
import './global.css';

const App = () => {
  return (
  <>
    <div className="container">
      <nav className="nav--bar">
        <Link to="/">Domů</Link>
        <ul>
          <li><Link to="/about">O Nas</Link></li>
          <span>|</span>
          <li><Link to="/contact">Kontakt</Link></li>
          <span>|</span>
          <li><Link to="/pobocky">Pobočky</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  </>
  );
};

const ErrorPage = () => {
  return (
    <main>
      <h2>404: Tady nic není</h2>
      <p>Asi jste se spletli</p>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/pobocky',
        element: <CentersPage />,
        children: [
          {
            path: ':id',
            element: <CentersDetail />
          },
        ]
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
