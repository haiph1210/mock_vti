import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import "./ModalRequest.scss"
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { createDonateAction } from '../../Donation/component/redux/DonationAction';
import { useDispatch } from 'react-redux';
import { createDPAction, updateDPAction } from '../redux/DonationProgramsAction';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function ModalRequest({ show, onHide,isUpdate,id }) {
    
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);
    const [name, setName] = useState();
    const [total, setTotal] = useState();
    const [units, setUnits] = useState([]);
    const dispatch = useDispatch();


    const hide = () => {
        onHide();
    }

    const handleSendRequest = () => {
        if(isUpdate === true) {
            dispatch(updateDPAction(id,name,total))
        }else{
            dispatch(createDPAction(name,total,onHide))
        }
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Request Donation Programs</h2>
            <div>
                <div className='input-form'>
                    <label className='lbl'>Name</label>
                    <input
                        type='text'
                        placeholder='Input Name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>

                    <label className='lbl'>Total</label>
                    <input
                        type='text'
                        placeholder='Input Total'
                        value={total}
                        onChange={(event) => setTotal(event.target.value)}
                    ></input>
                </div>

                <div>
                    <div className='btn-config'>
                        <button className='btn-1' onClick={handleSendRequest}><SendIcon/> SendRequest</button>
                        <button className='btn-2' onClick={hide}><CloseIcon/> Close</button>
                    </div>
                </div>
            </div>
            <ModalRequest />
        </div>
    );

    return (
        <div>
            <Modal
                open={show}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
