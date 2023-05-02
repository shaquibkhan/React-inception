import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
    const { id } = useParams();
    const restrauntDetail = useRestraunt(id)
    console.log("getRestrauntInfo");

    const dispatch = useDispatch()

    const handleAddItem = () => {
        dispatch(addItem("Four"))
    }
    // console.log(id);
    return (!restrauntDetail) ? <Shimmer /> : (
        <>
            <h1>Restraunt id - {restrauntDetail.id}</h1>
            <h1>{restrauntDetail.name}</h1>
            <img className="res-card" src={CDN_URL + restrauntDetail.cloudinaryImageId}></img>
            <h3>{restrauntDetail.city}</h3>
            <h3>{restrauntDetail.cuisines}</h3>
            <h3>{restrauntDetail.costForTwo}</h3>
            <h3>{restrauntDetail.avgRating} stars</h3>

            <button onClick={() => handleAddItem()}>Add Item</button>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restrauntDetail?.menu?.items).map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>

        
    )
}
export default RestrauntMenu;