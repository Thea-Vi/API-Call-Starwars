import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';


const Detail = () => {

    // use curly braces to destructure params from app.js
    const { category, id } = useParams();

    const [details, setDetails] = useState({})

    // ALWAYS GET THE AXIOS INSIDE THE USE EFFECT
    // CREATE THE AXIOS CALL FIRST THEN PLACE THE USEEFFECT TO SEE THE DETAILS
    // use effect to avoid running infinitely - runs once
    useEffect(() => {
        // make another axios call for the attributes
        // call is more specific from the routes parameter
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then((response) => {
                console.log("response getting details", response)
                setDetails(response.data)
                // set the response that's received from the axios call  and grab the data key to setDetails
            })
            .catch((err) => {
                console.log("error", err)
            })
        // setting category and id - instead of use effect running once it runs every change
    }, [category, id])

    // check details on components browser
    return (

        <div>
            {

                category === "people" ?
                    <>
                        <p>Name: {details.name}</p>
                        <p>Height: {details.height}</p>
                        <p>Mass: {details.mass}</p>
                    </>
                    : category === "planets" ?
                        <div>
                            <h1>Name: {details.name}</h1>
                            <p>Climate: {details.climate}</p>
                            <p>Terrain: {details.terrain}</p>
                        </div>
                        : category === "starships" ?
                            <div>
                                <h1>Name: {details.name}</h1>
                                <p>Model: {details.model}</p>
                                <p>Manufacturer: {details.manufactuter}</p>
                            </div>
                            // click on the actual photo and grab copy image  address instead of the results
                            : 
                            <div>
                                <h1>These are not the drones you're looking for.</h1>
                            <img src="https://www.tvinsider.com/wp-content/uploads/2021/12/BOBA_FETT_STAR_WARS_5-1014x570.jpg" alt="" style={{width: "300px", height: "200px"}} />
                            </div>
            }

        </div >
    );
};

export default Detail