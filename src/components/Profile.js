import { useState } from "react";

const Profile = (props) =>{
    const [count,setCount] = useState(0)
    return (
        <>
        <p>{count}</p>
        <p>NAME :{props.name}</p>
        <h2>This is the profile page.</h2>
        <button onClick={()=>{ setCount(1)}}>Count</button>
        </>
    )
}

export default Profile;