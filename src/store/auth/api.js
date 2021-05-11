import axios from 'axios';

export const fetchGallery = () => axios.get('https://picsum.photos/v2/list?page=2&limit=100');
