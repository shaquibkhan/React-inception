import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/body';
import Footer from './components/footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestrauntMenu from './components/RestrauntMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';

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
      const [user, setUser] = useState({
            name: "Shaquib Ahmad Khan",
            email: "connectshaquib@gmail.com"
      })
      return (
            <>
            <Provider store={store}>
            <UserContext.Provider value={{user: user}}>
                  <Header />
                  <Outlet />
                  </UserContext.Provider>
                  <Footer />
                  </Provider>
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