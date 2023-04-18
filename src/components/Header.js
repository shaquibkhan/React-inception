import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Title = () => {
   return <img className='logo-img' alt='img-logo' src='https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg'></img>
}


const Header = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const showOnline = useOnline()

   return (
      <div className='header'>
         <Title />
         <div className='nav-items'>
            {showOnline ? "✔️" : "❎"}
            {
               (isLoggedIn === true) ? <button onClick={() => setIsLoggedIn(false)}>Log Out</button> : <button onClick={() => setIsLoggedIn(true)}>Log In</button>
            }

            <ul>
               <Link to="/"><li>home</li></Link>
               <Link to="/about"><li>about us</li></Link>
               <Link to="/contact"><li>contact</li></Link>
               <Link to="/instamart"><li>Instamart</li></Link>
            </ul>
         </div>
      </div>
   )
}

export default Header;