import React, { useState } from 'react';
import "./style.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { dangNhap } from '../../redux/action/NguoiDungAction';
import { Redirect, useHistory } from 'react-router-dom';


export default function DangKy() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        fields: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "",
            email: ""
        },
        errors: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "",
            email: ""
        }
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUser({
            ...user,
            fields: {
                ...user.fields,
                [name]: value
            }
        });
    };

    const onSignup = (e) => {
        e.preventDefault();
        let { fields } = user;
        let err = {};
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
        for (let key in fields) {
            if (fields[key].trim() === "") {
                err = {
                    ...err,
                    [key]: 'Không được để trống'
                };
            }
            if (key === "email") {
                if (!regexEmail.test(fields[key].trim())) {
                    err = {
                        ...err,
                        [key]: "Email không hợp lệ"
                    }
                }
            }
            if (key === "soDT") {
                if (!regexPhoneNumber.test(fields[key].trim())) {
                    err = {
                        ...err,
                        [key]: "Số điện thoại không hợp lệ"
                    }
                }
            }
        }
        setUser({
            ...user,
            errors: err
        })
        for (let key in user.errors) {
            if (user.errors[key] !== "") {
                return
            }
        }
        dangKy(user.fields);
    }

    const dangKy = (user) => {

        const result = axios({
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            method: 'POST',
            data: user
        })
        result.then((result) => {
            const { taiKhoan, matKhau } = result.data;

            dispatch(dangNhap(taiKhoan, matKhau, history));
        })
        result.catch((err) => {
            console.log(err);
        })
    }

    if (localStorage.getItem("token")) {
        return <Redirect to="/" />
    }

    return (
        <div style={{ backgroundColor: "#1d1e22", height: "auto" }}>
            <div className="text-white mx-auto" style={{ marginTop: "60px", width: "25%" }}>
                <h1 className="text-center">Đăng ký</h1>
                <div>
                    <form className="dangKy">
                        <p>Tên tài khoản</p>
                        <div className="form__div mb-2">
                            <input name="taiKhoan" className="form-control" type="text" onChange={handleChange} />
                        </div>
                        <p className="invalid">{user.errors?.taiKhoan}</p>
                        <p>Mật khẩu</p>
                        <div className="form__div">
                            <input name="matKhau" className="form-control" type="password" onChange={handleChange} />
                        </div>
                        <p className="invalid">{user.errors?.matKhau}</p>
                        <p>Họ tên</p>
                        <div className="form__div">
                            <input name="hoTen" className="form-control" type="text" onChange={handleChange} />
                        </div>
                        <p className="invalid">{user.errors?.hoTen}</p>
                        <p>Số điện thoại</p>
                        <div className="form__div">
                            <input name="soDT" className="form-control" type="text" onChange={handleChange} />
                        </div>
                        <p className="invalid">{user.errors?.soDT}</p>
                        <p>Mã nhóm</p>
                        <div className="form__div">
                            <select name="maNhom" className="form-control" onChange={handleChange} >
                                <option value="">Chọn mã nhóm</option>
                                <option value="GP01">GP01</option>
                                <option value="GP02">GP02</option>
                                <option value="GP03">GP03</option>
                                <option value="GP04">GP04</option>
                                <option value="GP05">GP05</option>
                                <option value="GP06">GP06</option>
                                <option value="GP07">GP07</option>
                                <option value="GP08">GP08</option>
                                <option value="GP09">GP09</option>
                                <option value="GP10">GP10</option>
                                <option value="GP11">GP11</option>
                                <option value="GP12">GP12</option>
                            </select>
                        </div>
                        <p className="invalid">{user.errors?.maNhom}</p>
                        <p>Email</p>
                        <div className="form__div">
                            <input name="email" className="form-control" type="text" placeholder="mail@example.com" onChange={handleChange} />
                        </div>
                        <p className="invalid">{user.errors?.email}</p>
                    </form>
                    <button className="btn_signup" type='submit' onClick={onSignup}>Đăng Ký</button>
                </div>
            </div>
        </div>
    )
}
