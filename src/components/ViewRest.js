import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
import { Image, Button } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Reviews from './Reviews';




function ViewRest() {
  const params = useParams()


  const [allrestaurant, setAllrestaurant] = useState([])

  //function to api call for datas inside json file
  const getrestaurantdata = async () => {
    await fetch("/restaurants.json")
      .then(data => {
        data.json()
          .then(result => {
            // console.log(result);
            setAllrestaurant(result.restaurants)



          })

      })
  }

  //  console.log(allrestaurant);

  const restData = allrestaurant.find(item => item.id == params.id)
  console.log(restData);


  useEffect(() => {
    getrestaurantdata()
  }, [])



  return (
    <>

      {restData ? (
        <Row>
          <Col>
            <Image className='p-5' src={restData.photograph} fluid />
          </Col>
          <Col className='mt-5'>
            <h1>{restData.name}</h1>
            <h3>{restData.neighborhood}</h3>
            <h4>Cusine Type: {restData.cusine_type} </h4>
            <h4>Address:{restData.address}</h4>


            <Operatingtime timedata={restData.operating_hours}></Operatingtime>
            <br></br>
            <Reviews review={restData.reviews}></Reviews>





          </Col>
        </Row>


      ) : 'null'}
    </>
  )

}

export default ViewRest
