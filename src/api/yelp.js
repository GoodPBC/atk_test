// Yelp API library
import axios from 'axios'


/*
YELP API DATA

Client ID
P5OJPnzLiuO3TGKCx14OPA
API Key
rK5ViTtJgH0Rd0NBvu5t7mEDU8LD7OP-SdFLZTp_mJlgy4unKthNbCPmnI4cWjo8FBVLPfRp5e7MXYvxLOMJuHKs4yCO9DHTuhf1HwYqCo4vvreB90E2HnBeMAlvXnYx


GET REQUEST FOR YELP SEARCH 
GET https://api.yelp.com/v3/businesses/search

GET REQUEST FOR YELP BUSINESS SPECIFIC SEARCH 
GET https://api.yelp.com/v3/businesses/{id}
*/

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer rK5ViTtJgH0Rd0NBvu5t7mEDU8LD7OP-SdFLZTp_mJlgy4unKthNbCPmnI4cWjo8FBVLPfRp5e7MXYvxLOMJuHKs4yCO9DHTuhf1HwYqCo4vvreB90E2HnBeMAlvXnYx',
    },
});

