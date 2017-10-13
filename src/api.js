import axios from 'axios';
const baseUrl='http://localhost:8080/test';


axios.get(baseUrl).then(res=>console.log(res.data))