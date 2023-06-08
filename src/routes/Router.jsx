import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Container from '../layouts/Container';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import GroupPage from '../pages/GroupPage';
import ProfilePage from '../pages/ProfilePage';




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
          path: '/profile',
          element: <ProfilePage />
  
        }, 
        {
          path: '/login',
          element: <LoginPage />
        },
        {
        path: '/group',
        element: <GroupPage />
      }
      
      ]
    }
  ]);
  
  export default function Router() {
    return <RouterProvider router={router} />;
  }