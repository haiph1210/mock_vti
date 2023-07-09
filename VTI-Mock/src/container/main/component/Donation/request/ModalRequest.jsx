import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomeSelect from '../../../../../custome/customeSelect/CustomeSelect';
import CustomeInput from '../../../../../custome/customeSelect/CustomeInput';
import './ModalRequest.scss';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { createDonateAction, updateDonateAction } from '../component/redux/DonationAction';
import { findAllUserAction } from '../../user/redux/user/UserAction';
import { selectUser } from '../../user/redux/user/UserSelector';
import { selectAuth } from '../../user/redux/auth/AuthSelector';
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
function ModalRequest({ show, onHide,isUpdate,id }) {
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [userId, setUserId] = React.useState(1);

    React.useEffect(() => {
        dispatch(findAllUserAction());
    }, [])
    const user = useSelector(selectAuth);

    const handleSend = () => {
        if(isUpdate === true) {
            dispatch(updateDonateAction(id,user.id,totalPrice,onHide));
        }else{
            dispatch(createDonateAction(user.id, totalPrice,onHide));
        }
    }

    const handleValue = (value) => {
        setTotalPrice(value);
    }
    return (
        <div>
            <Modal
                open={show}
                onClose={onHide}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='config-title'>
                        <h4> Quyên Góp </h4>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='config-modal' >
                        <div className='config-request'>

                                <CustomeInput
                                    data={"Nhập Số Tiền Muốn Quyên Góp:"}
                                    type={'text'}
                                    placeholder={"Số Tiền Muốn Quyên Góp"}
                                    changeInput={(value) => handleValue(value)}
                                />
                                <button
                                    className='config-button'
                                    onClick={handleSend}>
                                    <SendIcon />Gửi</button>
                                <div>
                                </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalRequest;