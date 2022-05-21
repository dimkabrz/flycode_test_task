import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";
import classes from "./Registration.module.css";

const Registration = () => {

    const [user,setUser] = useState({name:'', email:'', password:''})
    const navigate=useNavigate()
    const registration= async(e)=>{
        e.preventDefault()
        setUser({...user,password_confirmation:user.password})
       try{
           const response = await axios.post('https://test.flcd.ru/api/register', user)
           localStorage.setItem('token', response.data.token)
           navigate('/posts')
       }
       catch {}
    }
    return (
        <form className={classes.registrationForm}>
            <MyInput
                type="text"
                placeholder="Введите Имя"
                value={user.name}
                onChange={e=>{
                    setUser({...user, name:e.target.value})
                }}
            />
            <MyInput
                type="email"
                placeholder="Введите адрес электронной почты"
                autoComplete="username"
                value={user.email}
                onChange={e=>{
                    setUser({...user, email:e.target.value})
                }}
            />
            <MyInput
                type="password"
                placeholder="Введите пароль"
                autoComplete="current-password"
                value={user.password}
                onChange={e=>{
                    setUser({...user,password:e.target.value})
                }}
            />
            <MyButton onClick={registration}>Зарегистрироваться</MyButton>
        </form>
    );
};

export default Registration;