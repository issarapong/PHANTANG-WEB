import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Container from '../layouts/Container';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
//import GroupPage from '../pages/GroupPage';
import ProfilePage from '../pages/ProfilePage';
import ProtectedRoute from '../features/auth/components/ProtectedRoute';
//import GroupViewPage from '../pages/GroupViewPage';
import PostPage from '../pages/PostPage';
import PostViewPage from '../pages/PostViewPage';




const router = createBrowserRouter([
    {
      path: '/',
      element: ( <Container />
      ),
      children: [
        {
          path: '/',
          element: <HomePage /> 
        },  
        {
          path: '/register',
          element: <RegisterPage />
        },
        {
          path: '/login',
          element: <LoginPage />
        },
    //     {
    //     path: '/group',
    //     element: <GroupPage />
    //   },
    //   {
    //   path: '/group/:groupId',
    //   element: <GroupViewPage />
    // },
     {
      path: '/post',
      element: <PostPage />
     },
     {
     path: '/post/:postId',
     element: <PostViewPage />
    },
      {
        path: '/profile',
        element:( 
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
         
        )

      }, 
      
      ]
    }
  ]);
  
  export default function Router() {
    return <RouterProvider router={router} />;
  }