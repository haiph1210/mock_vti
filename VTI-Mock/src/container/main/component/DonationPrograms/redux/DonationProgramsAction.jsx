import { toast } from "react-toastify";
import { createDP, deleteDp, findAllPageDP, updateDP } from "../service/DonationProgramService";

export const findAllDPAction = (page) => {
    return async (dispatch) => {
        try {
            const res = await findAllPageDP(page);
            if (res) {
                dispatch({
                    type: 'DP/findAll',
                    payload: res,
                })
            }
        } catch (error) {

        }
    }
}

export const createDPAction = (name,totalNumberOfDonation,onHide) => {
    return async (dispatch) => {
        try {
            const res = await createDP(name,totalNumberOfDonation);
            if (res) {
                dispatch(findAllDPAction());
                toast.success("Thêm mới một chương trình quyên góp thành công");
                onHide();
            }
        } catch (error) {

        }
    }
}

export const updateDPAction = (id,name,totalNumberOfDonation) => {
    return async (dispatch) => {
        try {
            const res = await updateDP(id,name,totalNumberOfDonation);
            if (res) {
                dispatch({
                    type: 'DP/update',
                })
            }
        } catch (error) {

        }
    }
}
export const deleteDPAction = (id) => {
    return async (dispatch) => {
        try {
            const res = await deleteDp(id);
            if (res) {
                dispatch({
                    type: 'DP/delete',
                })
            }
        } catch (error) {

        }
    }
}