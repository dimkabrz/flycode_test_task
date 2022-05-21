import React, {useEffect, useState} from 'react';
import axios from "axios";
import GetPosts from "./GetPosts";


const AllPosts = () => {

    const [posts,setPosts]=useState([])


    const getAllPost=async()=>{
        try{const response=await axios.get('https://test.flcd.ru/api/post')
            setPosts(response.data.reverse())
        }
        catch{}
    }

    useEffect(()=>{getAllPost()},[])

    return (
        <div>
            <GetPosts posts={posts} />
        </div>
    );
};

export default AllPosts;