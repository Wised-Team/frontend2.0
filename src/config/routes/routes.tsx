
import { Outlet, createBrowserRouter } from 'react-router-dom'
import FeedPage from '../../pages/FeedPage'

export const AppLayout = () => {
  return (
    <div className='h-screen w-screen'>
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
