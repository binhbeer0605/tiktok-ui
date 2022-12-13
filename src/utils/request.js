import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

const get = async (path, options = {}) => {
    const response = await request.get(path, options);

    return response.data;
};

export { get };
export default request;
