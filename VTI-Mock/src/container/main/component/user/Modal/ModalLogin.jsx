import React, { useState } from 'react'
import CustomeInput from '../../../../../custome/customeSelect/CustomeInput'
import { NavLink, useNavigate } from 'react-router-dom';
import './Modalogin.scss';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/auth/AuthAction';

const ModalLogin = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChangeUserName = (value) => {
        setUsername(value);
    }
    const handleChangePassword = (value) => {
        setPassword(value)
    }

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(loginAction(username,password,() => {
            navigate('/') 
        }));
        
    }
    return (
        <div>
            <form className='form-config'>
                <div className='config-login'>
                    <h3>Login</h3>
                    <CustomeInput
                        data={'Nhập Username:'}
                        type={'text'}
                        placeholder={'Nhập Username'}
                        changeInput={(value) => handleChangeUserName(value)}
                    />
                    <CustomeInput
                        data={'Nhập Password:'}
                        type={'password'}
                        placeholder={'Nhập Password'}
                        changeInput={(value) => handleChangePassword(value)}
                    />
                    <p>Nếu bạn chưa có tài khoản click vào hãy click vào <i> <NavLink to={'register'}>Đăng Kí</NavLink> </i></p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default ModalLogin
