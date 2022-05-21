import React from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "../../UI/button/MyButton";
const MainPage = () => {

    const navigate = useNavigate()
    return (
        <div>
            <MyButton onClick={()=>navigate('/registration')}>Регистрация</MyButton>
            <MyButton  onClick={()=>navigate('/login')}>Войти</MyButton>
        </div>
    );
};

export default MainPage;