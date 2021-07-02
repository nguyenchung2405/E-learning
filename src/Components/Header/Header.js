import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from '../../assets/img/your-logo.png';
import { layDanhSachKhoaHoc } from '../../redux/action/KhoaHocActions';
import style from './style.module.css';
import avatar from "../../assets/img/user-icon.jpg";
import { layThongTinNguoiDung } from '../../redux/action/NguoiDungAction';


export default function Header() {

    const { mangKH } = useSelector(state => state.khoaHocReducer);
    const { user } = useSelector(state => state.nguoiDungReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(layDanhSachKhoaHoc());
        dispatch(layThongTinNguoiDung());
    }, []);

    const renderDanhSachKhoaHoc = () => {
        let mangTenKhoaHoc = [];
        for (let khoaHoc of mangKH) {
            mangTenKhoaHoc.push(khoaHoc.danhMucKhoaHoc.tenDanhMucKhoaHoc);
        }
        let mangTenKhoaHocDuyNhat;
        mangTenKhoaHocDuyNhat = new Set([...mangTenKhoaHoc]);
        let mangKhoaHoc = [];
        for (let tenKhoaHoc of mangTenKhoaHocDuyNhat) {
            mangKhoaHoc.push(tenKhoaHoc);
        }
        return mangKhoaHoc.map((khoaHoc, index) => {
            return (
                <NavLink key={index} className="dropdown-item" to={`/khoahoc/${khoaHoc}`}>
                    {khoaHoc}
                </NavLink>
            )
        })
    };

    const logOut = () => {
        localStorage.clear();
        history.go("/");
    }

    const renderUser = () => {
        if (user.taiKhoan) {
            return (
                <>
                    <div class="dropdown">
                        <button class={`${style['dropdown-toggle']} ${style['btn__dropdown']}`} data-toggle="dropdown">
                            <div className={`${style.avatar}`}>
                                <img src={avatar} alt="avatar" style={{ width: "100%", height: "100%" }} />
                            </div>
                        </button>
                        <div class={`dropdown-menu ${style['dropdown-menu-alter']}`}>
                            <Link class={`dropdown-item ${style['dropdown-item-bg']}`} style={{ color: 'white', textDecoration: 'none' }} to="/profile" >Hồ sơ</Link>

                            <div className={`${style['gachchan']}`}></div>
                            <button class={`dropdown-item ${style['dropdown-item-bg']} text-danger`} style={{ background: 'none' }} onClick={logOut}>
                                Đăng xuất
                            </button>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <NavLink className={`text-white ${style.btn} ${style['btn-dangnhap']}`} to="/signin">Đăng nhập</NavLink>
                    <NavLink className={` ${style.btn} ${style['btn-dangky']}`} to="/signup">Đăng ký</NavLink>
                </>
            )
        }
    }

    return (

        <div className={`navbar navbar-expand-sm navbar-white ${style['nav-fixed']}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" style={{ width: '150px' }} /></NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0 ">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName={`${style['active-color']}`} to="/">Home<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Khóa học</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                {renderDanhSachKhoaHoc()}
                            </div>
                        </li>
                    </ul>
                    {renderUser()}
                </div>
            </div>
        </div>

    )
}
