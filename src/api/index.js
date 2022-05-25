import axios from 'axios';
import { setAuth } from '../pages/toolkit/ToolkitSlice';

const api = {
    getPost: async (id) => {
        const response = await axios.get('https://test.flcd.ru/api/post/' + id);
        return response;
    },
    redactPost: async (id, post) => {
        const response = await axios.patch(
            'https://test.flcd.ru/api/post/' + id,
            post,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        return response;
    },
    deletePost: async (id) => {
        const response = await axios.delete(
            'https://test.flcd.ru/api/post/' + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        return response;
    },
    registration: async (user) => {
        const response = await axios.post(
            'https://test.flcd.ru/api/register',
            user
        );
        return response;
    },
    login: async (user) => {
        const response = await axios.post(
            'https://test.flcd.ru/api/token',
            user
        );
        return response;
    },
    addPost: async (post) => {
        const response = await axios.post(
            `https://test.flcd.ru/api/post`,
            post,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        return response;
    },
    getAllPost: async () => {
        const response = await axios.get('https://test.flcd.ru/api/post');
        return response;
    },
};

export default api;
