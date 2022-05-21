import './App.css';
import AppRouter from "./AppRouter";
import Navbar from "./UI/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setAuth, setUser} from "./pages/toolkit/ToolkitSlice";
import {useEffect} from "react";

function App() {

    const token= localStorage.getItem('token')
    const dispatch=useDispatch()
    const isAuth = useSelector(state=>state.toolkit.isAuth)
    const user = async ()=>{
        const response = await axios.get('https://test.flcd.ru/api/user/self', {headers:{Authorization: `Bearer ${localStorage.getItem('token')}` }})
        dispatch(setUser(response.data))
    }
    useEffect(()=>{
        if(token){
            dispatch(setAuth(true))
        }
    }, [])

    useEffect(()=>{
        if(isAuth){
            user()
        }
    },[isAuth])

    return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
