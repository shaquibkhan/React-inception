import { useEffect, useState } from "react"
import { restaurantData, CDN_URL } from "../utils/config"
import Shimmer from "./Shimmer";

function filterData(searchText, RestrauList) {
  const copy = RestrauList;
  const filter = copy.filter((res) => 
    res.data.name.includes(searchText)
  )
  return filter;
}

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime }) => {
  // const {} = restaurant.data;
  return (
    <div className='res-card'>
      <img className='res-image' src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>INR{costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minutes</h4>
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
    console.log(json);
    setallRestraunats(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestrauList(json?.data?.cards[2]?.data?.data?.cards);
  }
console.log("render")


  return allRestraunats.length === 0 ? <Shimmer/> : (
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
            console.log(myData);
            setallRestraunats(myData);
          }}>search</button>

        </div>
        <div className="filter">
          <button onClick={() => {
            const filterList = allRestraunats.filter((res) => res.data.avgRating > 4);
            setRestrauList(filterList);
            console.log(filterList)
          }}>Top rated restaurants</button>
        </div>

        <div className='res-container'>
          {filteredRestrauList.map((restaurant) => (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
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

