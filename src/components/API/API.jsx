import axios from 'axios';

const API_KEY = '24774444-704b802232309115ec5a78cea';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

const getPhoto = async (request, page, per_page) => {
    try {
        const response = await axios.get(
            `?q=${request}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
        );
        return response.data;
        } catch (error) {
        console.log(error);
        }
};

export default getPhoto;

