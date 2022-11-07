import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './componantes/About/About';
import Main from './layouts/Main';
import Shop from './componantes/Shop/Shop';
import Oders from './componantes/Oders/Oders';
import Inventory from './componantes/Indentory/Inventory';
import { ProductsAndCardLoders } from './loders/ProdutcsAndCardLoders';
import Login from './componantes/Login/Login';
import SingUp from './componantes/SingUp/SingUp';
import Shipping from './componantes/Shipping/Shipping';
import PrivateRoutes from './componantes/Private/PrivateRoutes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: '/oders',
          loader: ProductsAndCardLoders,
          element: <Oders></Oders>
        },
        {
          path: '/inventory',
          element: <PrivateRoutes>
            <Inventory></Inventory>
          </PrivateRoutes>
        },
        {
          path: '/shipping',
          element: <PrivateRoutes>
            <Shipping></Shipping>
          </PrivateRoutes>,
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/singup',
          element: <SingUp></SingUp>,
        },
      ]
    },

  ])

  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
