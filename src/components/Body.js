import { useEffect, useState } from "react"
import { CDN_URL } from "../utils/config"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import filterData from "../utils/helper";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime }) => {
  // const {} = restaurant.data;
  const {user} = useContext(UserContext)
  return (
    <div className='res-card'>
      <img className='res-image' src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>INR{costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minutes</h4>
      <span>{user.name}</span>
    </div>
  )
}

const Body = () => {
  
  const [allRestraunats, setallRestraunats] = useState([]);
  const [filteredRestrauList, setfilteredRestrauList] = useState([]);
  const [searchText, setsearchText] = useState("");
  
  useEffect(()=>{
    // API CALL
    restrauntApi();
  }, []);

  async function restrauntApi(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5952314&lng=85.08308040000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json.data);
    setallRestraunats(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestrauList(json?.data?.cards[2]?.data?.data?.cards);
  }
// console.log("render")
 const offline = useOnline();

 if(!offline){
  return <h1>Offline, please check your internet connection !!!</h1>
 }
  return filteredRestrauList.length === 0 ? <Shimmer/> : (
    <>

      <div className='body'>
        <div className='search-container'>
          
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value)
            }}
          />
          <button onClick={() => {
            const myData = filterData(searchText, allRestraunats);
            setfilteredRestrauList(myData);
          }}>search</button>

        </div>
        <div className="filter">
          <button onClick={() => {
            const filterList = allRestraunats.filter((res) => res.data.avgRating > 4);
            setfilteredRestrauList(filterList);
            console.log(filterList)
          }}>Top rated restaurants</button>
        </div>
        <div className='res-container'>
          {filteredRestrauList.map((restaurant) => (
            <Link to={"/" + restaurant.data.id} key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data}  />
            </Link>
          )
          )}
          {/* <RestaurantCard {...restaurantData[0].data}/>
             <RestaurantCard {...restaurantData[1].data}/>
             <RestaurantCard  {...restaurantData[2].data}/>
             <RestaurantCard  {...restaurantData[3].data}/>
             <RestaurantCard  {...restaurantData[4].data}/>
             <RestaurantCard  {...restaurantData[5].data}/> 
             Other way of writing  <RestaurantCard  name={restaurantData[0].data.name}/>*/}
        </div>
      </div>
    </>
  )
}

export default Body;

