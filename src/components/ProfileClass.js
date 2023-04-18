import React from "react";



class ProfileClass extends React.Component{
 constructor(props){
    super(props)
    //create state
    this.state ={
        userInfo : {
            login : "Dummy name",
            bio : "UI guy",
            avatar_url : "https://avatars.githubusercontent.com/u/27014640?v=4",

        }
    }
    console.log("Child constructor" )
 }
 async componentDidMount(){
    const data = await fetch('https://api.github.com/users/shaquibkhan');
    const json = await data.json()
    console.log(json)
    this.setState({
        userInfo : json
    })
    console.log("Child componentDidMount")
}
componentDidUpdate(){
    console.log("Child componentDidUpdate")
}
componentWillUnmount(){
    console.log("Child componentWillUnmount")
}
 render(){
    console.log("Child render" )
    // const {count} = this.state
    return (
        <>
         <img className="res-image" src={this.state?.userInfo?.avatar_url} />
        <h2>NAME :{this.state?.userInfo?.login}</h2>
        <h2>Bio : {this.state?.userInfo?.bio}</h2>
       
        {/* <button onClick={()=>{
            this.setState({
             count :1,
            })
        }}>Count</button> */}
        </>
    )
 }
}

export default ProfileClass