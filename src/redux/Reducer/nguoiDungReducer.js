import { DANG_NHAP, USER_DETAIL } from "../type/type";



const stateDefault = {
    user: {

    },
    userDetail: {},
    error: ''
};

if (localStorage.getItem('user')) {
    stateDefault.user = JSON.parse(localStorage.getItem('user'));
}

export const nguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP: {
            return { ...state, user: action.user, error: '' }
        }
        case "DANG_NHAP_THAT_BAI": {
            return { ...state, error: action.err }
        }
        case USER_DETAIL: {
            return { ...state, userDetail: action.userDetail }
        }
        default: return { ...state }
    }
}