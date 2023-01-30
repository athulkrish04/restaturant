import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
// useEffect is used instead of ngOnit
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Restaurantlist() {
    const [allrestaurant,setAllrestaurant]=useState([])

     //function to api call for datas inside json file
     const getrestaurantdata=async()=>{
        await fetch("/restaurants.json")
        .then(data=>{
         data.json()
        .then(result=>{
            // console.log(result);
            setAllrestaurant(result.restaurants)
            


        })
        
     })
   }

   // console.log(allrestaurant);

     useEffect(()=>{
        getrestaurantdata()
     },[])

    
  return (

      <Row>
         {
            allrestaurant.map(item=>(
               <RestCard data={item}/>
            ))
         }

     </Row>
  )
}

export default Restaurantlist
