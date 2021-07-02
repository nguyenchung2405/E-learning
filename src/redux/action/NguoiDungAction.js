import axios from 'axios';
import { DANG_NHAP, UPDATE_USER, USER_DETAIL } from '../type/type';

export const dangNhap = (taiKhoan, matKhau, history) => {
    return async (dispatch) => {
        try {

            const user = {
                taiKhoan: taiKhoan,
                matKhau: matKhau,
            }
            const result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: user
            });
            dispatch({
                type: DANG_NHAP,
                user: result.data
            });
            localStorage.setItem('user', JSON.stringify(result.data));
            localStorage.setItem('token', result.data.accessToken);
            layThongTinNguoiDung();
            history.replace("/");
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'DANG_NHAP_THAT_BAI',
                err: "Tài khoản hoặc mật khẩu không đúng!"
            });
        }
    }
};

export const layThongTinNguoiDung = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
                method: "POST",
                headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
            });
            dispatch({
                type: USER_DETAIL,
                userDetail: result.data
            });
            localStorage.setItem('user', JSON.stringify(result.data));
        } catch (error) {
            console.log(error);
        }
    }
};
