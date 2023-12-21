
import { Outlet, createBrowserRouter } from 'react-router-dom'
import FeedPage from '../../pages/FeedPage'
import { Navbar } from '../../layouts'


export const AppLayout = () => {
  const hideNavbar = ( location.pathname === "/");

  return (
    <div className='w-screen'>
      
       {!hideNavbar && <Navbar />}
       <Outlet/>
    </div>
  )
}

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/feed',
                element:<FeedPage/>,
            },
        ]
    }
])
