import { findAllUser } from "../../service/UserService"

export const findAllUserAction = () => {
    return async (dispatch) => {
        try {
            const res = await findAllUser();
            console.log(res);
            if(res) {
                dispatch({
                    type: 'User/findAll',
                    payload: res
                })
            }
        } catch (error) {
            
        }
    }
}