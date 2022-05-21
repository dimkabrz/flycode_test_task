import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import MainPage from "./pages/mainpage/MainPage";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import AllPosts from "./pages/allposts/AllPosts";
import CreatePost from "./pages/createpost/CreatePost";
import PostIdPage from "./pages/postidpage/PostIdPage";

const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/posts" element={<AllPosts/>}/>
                <Route path="/createpost" element={<CreatePost/>}/>
                <Route path="/posts/:id" element={<PostIdPage/>}/>
            </Routes>
    );
};

export default AppRouter;