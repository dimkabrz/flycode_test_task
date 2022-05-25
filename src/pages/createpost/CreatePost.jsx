import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyInput from '../../UI/input/MyInput';
import MyButton from '../../UI/button/MyButton';
import api from '../../api';

const CreatePost = () => {
    const [post, setPost] = useState({ text: '' });
    const navigate = useNavigate();
    const addPost = async (e) => {
        e.preventDefault();
        try {
            const response = await api.addPost(post);
            navigate('/posts');
        } catch {}
    };
    return (
        <form>
            <MyInput
                type="text"
                placeholder="Напишите что-нибудь"
                value={post.text}
                onChange={(e) => {
                    setPost({ ...post, text: e.target.value });
                }}
            />
            <MyButton onClick={addPost}>Создать</MyButton>
        </form>
    );
};

export default CreatePost;
