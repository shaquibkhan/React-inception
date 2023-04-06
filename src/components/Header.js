import { useState } from "react";

const Title = () => {
    return <img className='logo-img' alt='img-logo' src='https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg'></img>
 }
 

 const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
     return (
     <div className='header'>
         <Title/>
         <div className='nav-items'>
            {
                (isLoggedIn===true) ? <button onClick={()=> setIsLoggedIn(false)}>Log Out</button> : <button onClick={()=> setIsLoggedIn(true)}>Log In</button> 
            }
            
            
         <ul>
         <li>home</li>
         
         <li>about us</li>
         <li>contact</li>
     </ul>
     </div>
     </div>
     )
        }

     export default Header;