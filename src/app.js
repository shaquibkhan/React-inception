import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestrauntMenu from './components/RestrauntMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
const About = lazy(() => import("./components/About"))
const Instamart = lazy(() => import("./components/Instamart"))
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

// On Demand Loading
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
            element: <Applayout />,
            errorElement: <Error />,
            children: [
                  {
                        path: '/',
                        element: <Body />
                  },
                  {
                        path: '/about',
                        element: (
                              <Suspense>
                                    <About />
                              </Suspense>
                        ),
                        children: [
                              {
                                    path: 'profile',
                                    element: <Profile />
                              }
                        ]
                  },
                  {
                        path: '/contact',
                        element: <Contact />
                  },
                  {
                        path: '/:id',
                        element: <RestrauntMenu />
                  },
                  {
                        path: '/instamart',
                        element: (
                              <Suspense fallback={<Shimmer />}>
                                    <Instamart />
                              </Suspense>
                        )
                  },
            ]
      },


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={myRouter} />);