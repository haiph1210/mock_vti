import { Box, Modal, Typography } from '@material-ui/core'

import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteDonateAction } from '../component/redux/DonationAction';
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
const ModalCheckDelete = ({id,show,onHide}) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteDonateAction(id,onHide));
    }
  return (
    <div>
       <div>
            <Modal
                open={show}
                onClose={onHide}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='config-title'>
                        <h4> Check Delete </h4>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='config-modal' >
                        <div className=''>
                               <div><i>Chào bạn</i></div>
                               <div><i>Bạn có chắc chắn muốn xóa?</i></div>
                               <div><button onClick={handleDelete}>Đồng Ý</button></div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    </div>
  )
}

export default ModalCheckDelete
