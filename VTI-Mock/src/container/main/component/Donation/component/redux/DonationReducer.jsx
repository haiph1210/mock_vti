const initState = {
    donation : [],
    price: 0,
    count: 0
    
}

const DonationReducer = (state = initState,action) => {
    switch(action.type) {
        case 'Donation/findAll':
            return{
                ...state,
                donation: action.payload
            } 

        case 'Donation/totalPrice':
            return{
                ...state,
                price: action.payload
            } 
        case 'Donation/count':
            return{
                ...state,
                count: action.payload
            } 

            default:
                return state;
    }
}
export default DonationReducer;