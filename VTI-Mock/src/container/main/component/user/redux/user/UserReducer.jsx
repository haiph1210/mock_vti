const initState = {
    user: []
}

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case "User/findAll":
            return{
                ...state,
                user : action.payload
            };
        default:
            return state;
    }
}

export default UserReducer;