const initState = {
    tokenResponse: {},
    isAuth: false
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Auth/login':
            return {
                ...state,
                tokenResponse: action.payload,
                isAuth: true
            }

            case 'Auth/logout':
                return {
                    ...state,
                    tokenResponse : {},
                    isAuth: false
                }
            case 'Auth/refresh':
                return {
                    ...state,
                    tokenResponse : {
                        token: localStorage.getItem('token'),
                        id: localStorage.getItem('id'),
                        userName: localStorage.getItem('userName'),
                        email: localStorage.getItem('email'),
                        firstName: localStorage.getItem('firstName'),
                        lastName: localStorage.getItem('lastName'),
                        role: localStorage.getItem('role'),
                        status: localStorage.getItem('status'),
                    },
                    isAuth: true,
                }
            

        default:
            return state;
    }

}

export default AuthReducer
