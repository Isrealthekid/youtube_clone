import axios from "axios";

// const axios = require('axios');
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '8bf9b0fa08msh560a62b74222851p11a3c7jsnd7432d79d99f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } =  await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}


try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} 


    // process.env.REACT_APP_RAPID_API_KEY,
