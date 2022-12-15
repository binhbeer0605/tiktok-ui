import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);

    return response.data;
};

export { get };
export default httpRequest;
