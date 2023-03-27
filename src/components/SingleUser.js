// import * as React from 'react';
import {useParams} from "react-router-dom";
import React, { useEffect, useState } from "react"

export default function SingleUser() {
    const [user, setUser] = useState([])
    let {id} = useParams();

    // const fetchData = () => {
    //     fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${id}`)
    //       .then(response => {
    //         return response.json()
    //       })
    //       .then(data => {
    //         setUser(data[0])
    //       })
    //   }
    
      useEffect(() => {
        // fetchData()
        fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${id}`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUser(data[0])
          })
      },[id])

  return (
    <>
    <h1>Hello {id}</h1>
    <img src={user.imageUrl} alt="hi"/>
    <h1>{user.firstName}</h1>
    </>
  );
}