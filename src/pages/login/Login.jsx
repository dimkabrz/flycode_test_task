import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../toolkit/ToolkitSlice';
import MyInput from '../../UI/input/MyInput';
import MyButton from '../../UI/button/MyButton';
import classes from './Login.module.css';
import api from '../../api';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await api.login(user);
            localStorage.setItem('token', response.data.token);
            dispatch(setAuth(true));
            navigate('/posts');
        } catch {}
    };
    return (
        <form className={classes.loginForm}>
            <MyInput
                type="email"
                placeholder="Адрес электронной почты"
                value={user.email}
                onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                }}
                autoComplete="username"
            />
            <MyInput
                type="password"
                placeholder="Пароль"
                value={user.password}
                onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                }}
                autoComplete="current-password"
            />
            <MyButton onClick={login}>Войти</MyButton>
        </form>
    );
};

export default Login;
