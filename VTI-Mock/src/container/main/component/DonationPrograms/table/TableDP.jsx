import React, { useState } from 'react'
import './DonationProgramTable.scss'
import { useDispatch, useSelector } from 'react-redux'
import ModalRequest from '../Modal/ModalRequest';
import ModalCheckDelete from '../../Donation/request/ModalCheckDelete';
import { selectAuth } from '../../user/redux/auth/AuthSelector';


const TableDP = ({id,index,name,total,units,createDate}) => {
    const dispatch = useDispatch();
    const tokenRes = useSelector(selectAuth);
    console.log(tokenRes);
    const [isUpdate,setIsUpdate] = useState(false);
    const [isDelete,setIsDelete] = useState(false);
    const handleUpdate = () => {
        setIsUpdate(true);
    }

    const handleDelete = () => {
        setIsDelete(true);
    }

    return (
        <>
        <tr key={index-1}>
            <td>{index}</td>
            <td>{name}</td>
            <td>{total}</td>
            <td>{createDate}</td>
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

export default TableDP


