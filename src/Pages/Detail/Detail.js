import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinKhoaHoc } from '../../redux/action/KhoaHocActions';
import './style.css';
import { layThongTinNguoiDung } from '../../redux/action/NguoiDungAction';
import { Redirect, useHistory } from 'react-router-dom';
export default function Detail(props) {

    const { maKhoaHoc } = props.match.params;
    const { detail } = useSelector(state => state.khoaHocReducer);
    const { userDetail } = useSelector(state => state.nguoiDungReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(detail);
    console.log(userDetail);

    useEffect(() => {
        dispatch(layThongTinKhoaHoc(maKhoaHoc));
    }, [maKhoaHoc]);

    const buyCourse = async () => {
        if (!localStorage.getItem('token')) {
            alert("Vui lòng đăng nhập để sử dụng chức năng này");
            history.replace("/signin");
            return
        }
        const maKhoaHocDecode = decodeURIComponent(maKhoaHoc);
        for (let course of userDetail.chiTietKhoaHocGhiDanh) {
            if (course.maKhoaHoc === maKhoaHoc) {
                alert("Bạn đã mua khóa học này.");
                return
            }
        }
        const { taiKhoan } = userDetail;
        const taiKhoanDangKy = { maKhoaHoc: maKhoaHocDecode, taiKhoan };
        try {
            const result = await axios({
                url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
                method: "POST",
                data: taiKhoanDangKy,
                headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
            });
            dispatch(layThongTinNguoiDung());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ backgroundColor: '#1d1e22' }}>
            <div className="container" style={{ marginTop: '60px' }}>
                <div className="row" style={{ padding: "5.3rem 0" }}>
                    <div className="col-6">
                        <img style={{ height: "303.75px" }} src={detail.hinhAnh} alt="hinh khoa hoc" />
                    </div>
                    <div className="col-6">
                        <div className="detail__KH text-white">
                            <p>Tên khóa học: {detail.tenKhoaHoc}</p>
                            <p>Chủ đề: {detail.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</p>
                            <p>Ngày tạo: {detail.ngayTao}</p>
                            <p>Người tạo: {detail.nguoiTao?.hoTen}</p>
                            <p>Mô tả: {detail.moTa}</p>
                            <button className="text-uppercase btn" style={{ backgroundColor: "#feda6a", fontSize: "16px", borderRadius: "100px" }} onClick={() => { buyCourse() }}>Mua khóa học</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
