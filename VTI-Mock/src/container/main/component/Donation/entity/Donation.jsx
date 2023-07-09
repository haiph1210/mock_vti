import React, { useState } from 'react'
import './Donation.scss'
import { colors } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import ModalRequest from '../request/ModalRequest'
import ModalCheckDelete from '../request/ModalCheckDelete'
import { selectAuth } from '../../user/redux/auth/AuthSelector'


const Donation = ({ id, index, lastName, phone, price, createdDate }) => {
    const dispatch = useDispatch();
    const tokenRes = useSelector(selectAuth);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const handleUpdate = () => {
        setIsUpdate(true);
    }
    const handleDelete = () => {
        setIsDelete(true);
    }

    return (
        <>
            <tr key={index - 1}>
                <td>{index}</td>
                <td><div>
                    <div>{lastName}</div>
                    <div>{phone}</div>
                </div></td>
                <td>{price}</td>
                <td>{createdDate}</td>
                {tokenRes.role === "Manager"
                    ?
                    <td><div className='action-config'>
                        <button onClick={handleUpdate}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                    </td>
                    :
                    null
                }


            </tr>
            {isUpdate && (
                <ModalRequest
                    show={isUpdate}
                    onHide={() => setIsUpdate(false)}
                    isUpdate={isUpdate}
                    id={id}
                />
            )}
            {isDelete && (
                <ModalCheckDelete
                    show={isDelete}
                    onHide={() => setIsDelete(false)}
                    id={id}
                />
            )}
        </>
    )
}

export default Donation;
