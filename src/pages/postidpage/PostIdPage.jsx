import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";
import classes from "./PostIdPage.module.css";

const PostIdPage = () => {

    const params=useParams()
    const navigate=useNavigate()
    const date= new Date()
    const [post,setPost]=useState({text:''})
    const getPost=async()=>{
        try{
            const response=await axios.get('https://test.flcd.ru/api/post/'+params.id)
            setPost(response.data)
        }
        catch{}
    }


    const redactPost=async(e)=>{
        try{
            e.preventDefault()
            const response=await axios.patch('https://test.flcd.ru/api/post/'+params.id, post, {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
            navigate('/posts')
        }
        catch{}
    }
    const deletePost=async(e)=>{
        try{
            e.preventDefault()
            const response=await axios.delete('https://test.flcd.ru/api/post/'+params.id, {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
            navigate('/posts')
        }
        catch {}

    }



    useEffect(()=>{getPost()},[])

    const user=useSelector(state=>state.toolkit.user)

    const realUser = post.user_id===user.id
    return (
        <div className={classes.post}>
            <h3>ID поста-{post.id}</h3>
            <div>{post.text}</div>
            <div>Дата создания:  {date.toLocaleString()}</div>
            {realUser
                &&<form>
                    <MyInput
                        type="text"
                        value={post.text}
                        onChange={e=>{
                            setPost({...post,text:e.target.value})
                        }}
                    />
                    <MyButton onClick={redactPost}>Редактировать</MyButton>
                    <MyButton onClick={deletePost}>Удалить</MyButton>
                </form>

            }

        </div>
    );
};

export default PostIdPage;