// import * as React from 'react';
import {useParams} from "react-router-dom";
import React, { useEffect, useState } from "react"

export default function SingleUser() {
    const [user, setUser] = useState([])
    let {id} = useParams();

      useEffect(() => {
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
    <div class="container mx-auto my-40">
        <div>
            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div class="flex justify-center">
                        <img src={user.imageUrl} alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>                
                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900">{user.firstName} {user.lastName}</h1>
                    <p class="text-center text-sm text-gray-400 font-medium">Contact Number : {user.contactNumber}</p>
                    <p>
                        <span>      
                        </span>
                    </p>
                    <div class="my-5 px-6">
                        <a href="#" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect @ <span class="font-bold">{user.email}</span></a>
                    </div>

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">More Info</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                <span class="font-bold">Age : </span>
                                    <span class="text-gray-500 text-xs">{ user.age}</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2 "/>
                                <span class="font-bold">DOB : </span> 
                                    <span class="text-gray-500 text-xs">{user.dob}</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                 <span class="font-bold">Salary : </span>
                                <span class="text-gray-500 text-xs">{user.salary}</span>
                            </a>

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                <span class="font-bold">Address : </span>
                                <span class="text-gray-500 text-xs">{user.address}</span>
                            </a>

                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  );
}