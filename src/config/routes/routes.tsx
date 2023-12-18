
import { Outlet, createBrowserRouter } from 'react-router-dom'
import FeedPage from '../../pages/FeedPage'
import { Navbar } from '../../layouts'

export const AppLayout = () => {
  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <>Home Page</>
      },
      {
        path: '/feed',
        element: <FeedPage />,
      },
    ]
  }
])
