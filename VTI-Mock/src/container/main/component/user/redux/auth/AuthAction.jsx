import { toast } from "react-toastify";
import { login, register } from "../../service/UserService"

export const loginAction = (username,password,navigateCallBack) => {
    return async(dispatch) => {
        try {
            const res = await login(username,password);
            console.log(res);
            if(res){
                dispatch({
                    type: 'Auth/login',
                    payload: res,
                });
                localStorage.setItem('token',res.token)
                localStorage.setItem('id',res.id)
                localStorage.setItem('userName',res.userName)
                localStorage.setItem('email',res.email)
                localStorage.setItem('firstName',res.firstName)
                localStorage.setItem('lastName',res.lastName)
                localStorage.setItem('role',res.role)
                localStorage.setItem('status',res.status)
                toast.success('Login Success');
                navigateCallBack();
            }
        } catch (error) {
        }
    }
}

export const logoutAction = (navigateCallBack) => {
    return async(dispatch) => {
        try {
                dispatch({
                    type: 'Auth/logout',
                });
                localStorage.removeItem('token')
                localStorage.removeItem('token')
                localStorage.removeItem('id')
                localStorage.removeItem('userName')
                localStorage.removeItem('email')
                localStorage.removeItem('firstName')
                localStorage.removeItem('lastName')
                localStorage.removeItem('role')
                localStorage.removeItem('status')
                toast.success('Logout Success');
                navigateCallBack();
        } catch (error) {
        }
    }
}

export const refreshAction = () => {
    return async(dispatch) => {
        try {
                dispatch({
                    type: 'Auth/refresh',
                });
        } catch (error) {
        }
    }
}


export const registerAction = (userName,email,password,firstName,lastName) => {
    return async(dispatch) => {
        try {
            const res = await register(userName,email,password,firstName,lastName);
            if(res&&res.data){
                dispatch({
                    type: 'Auth/register',
                });
                toast.success('Register Success');
                   // config navigate login
            }
        } catch (error) {
        }
    }
}