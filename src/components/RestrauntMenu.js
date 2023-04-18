import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";

const RestrauntMenu = () => {
    const { id } = useParams();
    const restrauntDetail = useRestraunt(id)

    console.log("getRestrauntInfo");

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
        </>
    )
}
export default RestrauntMenu;