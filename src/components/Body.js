import { restaurantData, CDN_URL } from "../utils/config" 

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime}) => {
    // const {} = restaurant.data;
    return (
       <div className='res-card'>
          <img className='res-image' src={CDN_URL+cloudinaryImageId}></img>
          <h3>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{avgRating}</h4>
          <h4>INR{costForTwo/100} for two</h4>
          <h4>{deliveryTime} minutes</h4>
       </div>
    )
  }

const Body= () => {
    return (
        <>
        <div className='body'>
          <div className='search'>Search</div>
          <div className='res-container'>
          {restaurantData.map((restaurant) =>  (
               <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
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

 