import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { dangNhap } from '../../redux/action/NguoiDungAction';
import './style.css';

export default function DangNhap() {

    const [userSignin, setUserSignin] = useState(
        {
            taiKhoan: '',
            matKhau: ''
        }
    );
    const dispatch = useDispatch();
    const history = useHistory();
    const { error } = useSelector(state => state.nguoiDungReducer);
    console.log(error);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setUserSignin({
            ...userSignin,
            [name]: value
        })
    }

    const onSignin = () => {
        dispatch(dangNhap(userSignin.taiKhoan, userSignin.matKhau, history));
    }

    if (localStorage.getItem("token")) {
        return <Redirect to="/" />
    }

    return (
        <div className="pt-5" style={{ backgroundColor: "#1d1e22", height: "100vh" }}>
            <div className="text-white mx-auto" style={{ marginTop: "60px", width: "25%" }}>
                <h1 className="text-center">Đăng nhập</h1>
                <div>
                    <form className="dangNhap">
                        <p>Tên tài khoản</p>
                        <div className="form__div mb-2">
                            <input name="taiKhoan" className="form-control" type="text" onChange={handleChange} />
                        </div>

                        <p>Mật khẩu</p>
                        <div className="form__div">
                            <input name="matKhau" className="form-control" type="password" onChange={handleChange} />
                        </div>
                        {error ? <p className="invalid mt-3">{error}</p> : ''}

                    </form>
                    <button className="btn_signup" type='submit' onClick={onSignin}>Đăng Nhập</button>
                </div>
            </div>
        </div>
    )
}
