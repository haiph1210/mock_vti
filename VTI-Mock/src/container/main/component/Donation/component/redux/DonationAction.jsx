import { toast } from "react-toastify";
import { countDonation, createDonate, deleteDonate, findAllDonate, totalPriceDonation, updateDonate } from "../../service/DonationService";

export const findAllDonationAction = () => {
    return async (dispatch) => {
        try {
            const res = await findAllDonate();
            if (res) {
                dispatch({
                    type: 'Donation/findAll',
                    payload: res,
                })
            }
        } catch (error) {
        }
    }
}

export const createDonateAction = (userId, donatePrice, onHide) => {
    return async (dispatch) => {
        try {
            const res = await createDonate(userId, donatePrice);
            if (res) {
                dispatch({
                    type: 'Donation/create',
                })
                onHide();
                toast.success("Create New Donation Success");
                dispatch(findAllDonationAction());
                dispatch(totalCountAction());
                dispatch(totalPriceAction());
            } else {
                toast.error("Create New Donation False");
            }
        } catch (error) {
        } finally {
        }
    }
}


export const updateDonateAction = (id, userId, donatePrice, onHide) => {
    return async (dispatch) => {
        try {
            console.log(id, userId, donatePrice);
            const res = await updateDonate(id, userId, donatePrice);
            if (res) {
                dispatch({
                    type: 'Donation/update',
                })
                onHide();
                toast.success("Create New Donation Success");
            } else {
                toast.error("Create New Donation False");
            }
        } catch (error) {
        } finally {
            dispatch(findAllDonationAction());
        }
    }
}

export const deleteDonateAction = (id, onHide) => {
    return async (dispatch) => {
        try {

            const res = await deleteDonate(id);
            if (res) {
                dispatch({
                    type: 'Donation/delete',
                })
                onHide();
                toast.success(`Delete with ${id} success`);
            } else {
                toast.error("Delete False");
            }
        } catch (error) {
        } finally {
            dispatch(findAllDonationAction());
        }
    }
}

export const totalPriceAction = () => {
    return async (dispatch) => {
        try {
            const res = await totalPriceDonation();
            if (res) {
                dispatch({
                    type: 'Donation/totalPrice',
                    payload: res
                })
            } else {
            }
        } catch (error) {
        }
    }
}

export const totalCountAction = () => {
    return async (dispatch) => {
        try {
            const res = await countDonation();
            if (res) {
                dispatch({
                    type: 'Donation/count',
                    payload: res
                })
            } else {
            }
        } catch (error) {
        }
    }
}