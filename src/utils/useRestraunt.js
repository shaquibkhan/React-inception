import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "./config";
const useRestraunt = (id) => {
    const [restraunt, setRestraunt] = useState(null);

    useEffect(()=>{
        //API CALL
        getRestrauntInfo() 
    },[])
    
    async function getRestrauntInfo(){
         const data = await fetch(FETCH_MENU_URL + id);
         const json = await data.json();
         console.log(json.data);
         setRestraunt(json?.data?.cards[0]?.card.card.info);
    }
    return restraunt;
}

export default useRestraunt;