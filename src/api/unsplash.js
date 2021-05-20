import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",

    headers: {
        Authorization: 'Client-ID paUubqhfHk_t1S4MIDxpV6ruef0vtZb8bS4n3QZZ5hY'
    }
})