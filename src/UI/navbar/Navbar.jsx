import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../pages/toolkit/ToolkitSlice';
import NavbarButton from './navbarbutton/NavbarButton';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.toolkit.isAuth);

    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        dispatch(setAuth(false));
        navigate('/');
    };

    return (
        <div className={classes.Navbar}>
            <Link to="/posts" className={classes.Navbar_link}>
                Просмотр всех постов
            </Link>
            {isAuth ? (
                <>
                    <Link to="/createpost" className={classes.Navbar_link}>
                        Создать пост
                    </Link>
                    <NavbarButton
                        className={classes.Navbar_link}
                        onClick={logOut}
                    >
                        Выйти
                    </NavbarButton>
                </>
            ) : (
                <Link to="/" className={classes.Navbar_link}>
                    Вернуться на главную
                </Link>
            )}
        </div>
    );
};

export default Navbar;
