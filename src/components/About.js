import React from "react"
import { Outlet } from "react-router-dom"
import ProfileClass from "./ProfileClass"
import ProfileFunction from "./Profile"
import UserContext from "../utils/UserContext"

// const About = () => {
//     return (
//         <>
//         <div>About Us</div>
//         <h2>This is an about-us page.</h2>
//         </>
//     )
// }
// export default About;

class About extends React.Component{
    constructor(props){
        super(props)
       
        // console.log("Parent constructor")
    }
   async componentDidMount(){
    
        // console.log("Parent componentDidMount")

    }
    render(){
        // console.log("Parent render")
        
        return (
                    <>
                    <UserContext.Consumer>
            {(value)=> console.log(value)}
        </UserContext.Consumer>
                    <div>About Us</div>
                    <h1>This is an about-us page.</h1>
                    <ProfileClass />
                    {/* <ProfileClass name="second child"/> */}
                    </>
                )
    }

}
export default About;
