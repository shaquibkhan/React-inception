import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestrauntMenu from './components/RestrauntMenu';
// Config Driven UI 

//  const confg = [
//    {
//       type: 'carousel',
//       cards: [
//          {
//             offername : '50% off'
//          },
//          {
//             offername : '30% off'
//          },
//       ]
//    }
//  ]

const Applayout = () => {
      return (
            <>
                  <Header />
                  <Outlet />
                  <Footer />
            </>
      )
}

const myRouter = createBrowserRouter([
      {
            path: '/',
            element: <Applayout/>,
            errorElement: <Error />,
            children : [
                  {
                        path: '/',
                        element: <Body/>
                  },
                  {
                        path: '/about',
                        element: <About/>
                  },
                  {
                        path: '/contact',
                        element: <Contact/>
                  },
                  {
                        path: '/:id',
                        element: <RestrauntMenu />
                  },
            ]
      },
     
      
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={myRouter}/>);