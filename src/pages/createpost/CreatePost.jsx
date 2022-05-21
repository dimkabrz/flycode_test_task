import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

const CreatePost = () => {

    const [post,setPost]=useState({text:''})
    const navigate = useNavigate()
    const addPost=async (e)=>{
        e.preventDefault()
        try{
           const response=await axios.post(`https://test.flcd.ru/api/post`, post, {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
            navigate('/posts')

        }
       catch {}
    }
    return (
        <form>
            <MyInput
                type="text"
                placeholder="Напишите что-нибудь"
                value={post.text}
                onChange={e=>{
                    setPost({...post, text:e.target.value})
                }}
            />
            <MyButton onClick={addPost}>Создать</MyButton>
        </form>
    );
};

export default CreatePost;