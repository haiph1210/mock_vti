import './ModalLogOut.scss';
import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/auth/AuthAction';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '50vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ModalLogOut = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const handleClick = () => {
        dispatch(logoutAction(()=> {
            window.location.href = '/';
        }));
    }
    return (
        <div>
            <div className='logout'>
                <div className='handle-logOut'>
                    <div><i>Chào bạn</i></div>
                    <div><i>Bạn có chắc chắn đăng xuất?</i></div>
                    <div><button onClick={handleClick}>Đồng Ý</button></div>
                </div>
            </div>
        </div>
    )
}

export default ModalLogOut;
