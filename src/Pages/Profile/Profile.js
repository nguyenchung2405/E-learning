import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { capNhatThongTin, layThongTinNguoiDung } from '../../redux/action/NguoiDungAction';
import './style.css';


export default function Profile() {

    const dispatch = useDispatch();
    const { userDetail } = useSelector(state => state.nguoiDungReducer);
    let newUser = { ...userDetail }
    const [user_Detail, setUserDetail] = useState({ ...newUser });
    const { hoTen, soDT, email, taiKhoan } = user_Detail;
    console.log(user_Detail);
    const history = useHistory();

    useEffect(() => {
        dispatch(layThongTinNguoiDung())
    }, [])


    const handeleChange = (e) => {
        let { name, value } = e.target;
        setUserDetail({
            ...user_Detail,
            [name]: value
        })
    };

    const updateInformation = async (e) => {
        e.preventDefault();
        console.log(user_Detail);
        try {
            const result = await axios({
                url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                method: "PUT",
                data: user_Detail,
                headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
            });
            dispatch(layThongTinNguoiDung());
            history.go(0);
        } catch (error) {
            console.log(error);
        }
    }

    const renderCourseList = () => {
        if (user_Detail?.chiTietKhoaHocGhiDanh) {
            return user_Detail.chiTietKhoaHocGhiDanh.map((course, index) => {
                return (
                    <div className="course" key={index}>
                        <div className="row">
                            <div className="col-10" style={{ lineHeight: "38px" }}>
                                <p className="text-white" style={{ fontSize: "16px", margin: "0" }}>{course.tenKhoaHoc}</p>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger" onClick={() => { deleteCourse(course.maKhoaHoc) }}>Xóa</button>
                            </div>
                        </div>
                        <hr style={{
                            height: "2px",
                            background: "#393f4d"
                        }} />
                    </div>
                )
            })
        }
    }

    const deleteCourse = async (maKH) => {
        const { taiKhoan } = user_Detail;
        const taiKhoanThucHien = { maKhoaHoc: maKH, taiKhoan };
        try {
            const result = await axios({
                url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
                method: "POST",
                data: taiKhoanThucHien,
                headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
            });
            dispatch(layThongTinNguoiDung());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form_detail_user" style={{ height: "100%", padding: "6.8rem 0" }}>
            <div className="mx-auto" style={{ width: "70%", display: "flex" }}>
                <div className="menu">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#profile">Thông tin cá nhân</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#couresList">Danh sách khóa học</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="tab-pane container active" id="profile">
                        <form >
                            <div className="form__input">
                                <label htmlFor="">Họ tên</label>
                                <div className="form__field">
                                    <input type="text" name="hoTen" value={hoTen} onChange={handeleChange} />
                                </div>
                            </div>
                            <div className="form__input">
                                <label htmlFor="">Số điện thoại</label>
                                <div className="form__field">
                                    <input type="text" name="soDT" value={soDT} onChange={handeleChange} />
                                </div>
                            </div>
                            <div className="form__input">
                                <label htmlFor="">Email</label>
                                <div className="form__field">
                                    <input type="text" name="email" value={email} onChange={handeleChange} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn__update" onClick={(e) => { updateInformation(e) }}>Cập nhật</button>
                        </form>
                    </div>
                    <div class="tab-pane container fade" id="couresList">
                        {renderCourseList()}
                    </div>
                </div>
            </div>
        </div>
    )
}
