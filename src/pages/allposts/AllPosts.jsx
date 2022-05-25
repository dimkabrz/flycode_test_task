import React, { useEffect, useState } from 'react';
import GetPosts from './GetPosts';
import api from '../../api';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    const getAllPost = async () => {
        try {
            const response = await api.getAllPost();
            setPosts(response.data.reverse());
        } catch {}
    };

    useEffect(() => {
        getAllPost();
    }, []);

    return (
        <div>
            <GetPosts posts={posts} />
        </div>
    );
};

export default AllPosts;
