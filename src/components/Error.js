import { useRouteError } from "react-router-dom";



const Error =  ()=> {

    const error = useRouteError();
    console.log(useRouteError())
    return (
        <>
        <h1>OOPS !!!</h1>
        <h3>Something went wrong</h3>
        <h4 className="err">{error.status}</h4>
        <h4 className="err">{error.statusText}</h4>
        </>
    )
}
export default Error;