import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/config";

const RestrauntMenu = ()=>{

    const [restrauntDetail, setRestrauntDetail] = useState({})
    useEffect(()=>{
        getRestrauntInfo()
    },[])
    
    async function getRestrauntInfo(){
         const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5952314&lng=85.08308040000001&restaurantId=598079&submitAction=ENTER');
         const json = await data.json();
         console.log(json.data);
         setRestrauntDetail(json?.data?.cards[2]?.data?.data?.cards);
    }
    const {id} = useParams();
    // const {id} = params;
    // console.log(params);
    return (
        <>
        <h1>Restraunt id - {id}</h1>
        <h1>{restrauntDetail.name}</h1>
        <img src={CDN_URL + restrauntDetail.cloudinaryImageId}></img>
        </>
    )
}
export default RestrauntMenu;