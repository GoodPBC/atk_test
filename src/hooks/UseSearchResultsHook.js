import React, { useState, useEffect } from 'react'
import yelp from "../api/yelp";

//Yelp  API Helper
export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    // const [YelpApiSearch, results, errorMessage] = UseYelpApiSearchHook()     // searchHook

    const searchYelpAPI = async searchTerm => {

        try {
            const res =  await yelp.get(`/search`, {
                params: {
                    term: searchTerm,
                    limit: 35,
                    location: `jersey city`
                }
            });
            setResults(res.data.businesses)
        } catch (err) {
            setErrorMessage('OOPS, Something Went Wrong.')
            console.log(err)
        }
    }

    useEffect(() => {
        //call yelp api 
        searchYelpAPI('Jersey City')
    }, []);

    return[searchYelpAPI, results, errorMessage]
}
