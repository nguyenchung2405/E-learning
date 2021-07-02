import { GET_DETAIL_KH, GET_MANG_KH } from '../type/type';

const stateDefault = {
    mangKH: [],
    detail: {}
}

export const khoaHocReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_MANG_KH: {
            return { ...state, mangKH: action.mangKH };
        }
        case GET_DETAIL_KH: {
            return { ...state, detail: action.detail };
        }
        default: return { ...state }
    }
}