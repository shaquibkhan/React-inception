import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';



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
    <Header/>
    <Body/>
    <Footer/>
    </>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>);