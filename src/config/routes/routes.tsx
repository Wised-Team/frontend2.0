import { Outlet, createBrowserRouter } from 'react-router-dom';
import FeedPage from '../../pages/FeedPage';
import { Navbar } from '../../layouts';

export const AppLayout = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
};

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <>Home Page</>,
      },
      {
        path: 'designsystem',
        element: <FeedPage />,
      },
      {
        path: '/feed',
        element: <FeedPage />,
      },
    ],
  },
]);
