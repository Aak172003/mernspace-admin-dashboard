import axios from "axios";


export const api = axios.create({
    // Prefix Vite is most impoetant , because of this Vite prefix this able to deffer video
    baseURL: import.meta.env.VITE_BACKEND_API_URL,

    // if hum isko tru nhi krenge so hamari cookies store nhi hogi browser ke ander , 
    // and jo request send krenge uske ander bhi cookies automaticcaly add nhi hogi 
    withCredentials: true,
    headers: {
        // Our data will pass in form of json data 
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})