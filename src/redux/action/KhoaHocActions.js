import axios from 'axios';
import { GET_MANG_KH, GET_DETAIL_KH } from '../type/type';

export const layDanhSachKhoaHoc = (maNhom = "GP03") => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`,
                method: 'GET',
            });
            dispatch({
                type: GET_MANG_KH,
                mangKH: result.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export const layThongTinKhoaHoc = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
                method: 'GET'
            });
            dispatch({
                type: GET_DETAIL_KH,
                detail: result.data
            })
        } catch (error) {
            console.log(error);
        }
    }

};