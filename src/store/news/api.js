import axios from 'axios';

export const fetchNews = () => axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.NEXT_PUBLIC_NY_API_KEY}`);
