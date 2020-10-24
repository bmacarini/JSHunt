import axios from 'axios';

const api = axios.create({ 

    baseURL: 'https://jshunt-app-api.herokuapp.com/api' 
    
});

export default api;