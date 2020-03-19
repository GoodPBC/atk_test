import React, { useState, useEffect } from 'react'
import yelp from "../api/yelp";

//Yelp  API Helper
export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    
    
    // Axios Helper
    const YelpApiSearch = async searchTerm => {
        try {
            const res =  await yelp.get(`/search`, {
                params: {
                    term: searchTerm,
                    limit: 5,
                    location: `jersey city`
                }
            });
            setResults(res.data.businesses)
            console.log(res.data.businesses)
    
        } catch (err) {
            setErrorMessage('OOPS, Something Went Wrong.')
            console.log(err)
        }
        
    
    };
    //
    useEffect(() => {
        YelpApiSearch('Jersey City')
    }, []);

    return [YelpApiSearch, results, errorMessage]
}
