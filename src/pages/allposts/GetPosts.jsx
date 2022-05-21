import React from 'react';
import {useNavigate} from "react-router-dom";
import classes from "./GetPosts.module.css";

const GetPosts = ({posts}) => {

    const navigate=useNavigate()
    return (
        <div className={classes.allPosts}>
            {posts.map((post)=>
                <div key={post.id} onClick={()=>navigate(`/posts/${post.id}`)} className={classes.post} >
                   <h3>{post.id}</h3>
                    <div>{post.text}</div>
                    {new Date(post.created_at).toLocaleDateString()  }
                </div>
            )}
        </div>
    );
};

export default GetPosts;