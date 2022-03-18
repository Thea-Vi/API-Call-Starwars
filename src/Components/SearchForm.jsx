import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
// useHistory to redirect
const SearchForm = () => {

    // state variable for each input for the form for mapping
    const [categories, setCategories] = useState([])

    // state variables
    // for the functions
    // getter, setter for the form
    const [selectCategory, setSelectCategory] = useState("")
    const [id, setId] = useState(null)

    const history = useHistory();

    // use effect to run once on the first render
    useEffect(() => {
        // make axios call to get back data
        // initial call
        axios.get("https://swapi.dev/api/")
            .then((response) => {
                console.log("response=====>", response)
                console.log(Object.keys(response.data)) //this gives an array of the keys from response.data (as keys)
                setCategories(Object.keys(response.data))
                // 
                // set whichever first category 
                setSelectCategory(Object.keys(response.data[0]))

            })
            // catch error
            .catch((err) => {
                console.log("errrrrrror", err)

            })

    }, [])

     // To redirect example localhost:3000/people/1 when form is submitted - 
    const searchSubmit = ((e) => {
        e.preventDefault()
        console.log("submitted")
        history.push(`/${selectCategory}/${id}`)

    })

    return (
        <div>
            <form onSubmit={(searchSubmit)}>
                <div className="form-group">
                    <label>Search For:</label>
                    <select onChange={(e) => { setSelectCategory(e.target.value) }} className='form-select'>
                        {
                            categories.map((category, i) => {
                                return (
                                    <option key={i} value={category}>{category}</option>
                                )
                            })
                        }

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID</label>
                    <input onChange={(e) => { setId(e.target.value) }} type="number" name="" id="" />
                    <button className='btn btn-primary'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm