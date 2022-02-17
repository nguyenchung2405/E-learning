import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className={`${style.border}`} style={{ backgroundColor: '#1d1e22' }}>
            <div className="container d-flex py-3">
                <div className={`${style['About__Us']}`}>
                    <p className={`${style.tieude}`}>về chúng tôi</p>
                    <NavLink to="#">
                        <p className={`${style.footer__p}`}>Điều khoản & Quy chế hoạt động</p>
                    </NavLink>
                    <NavLink to="#">
                        <p className={`${style.footer__p}`}>Chính sách bảo mật</p>
                    </NavLink>
                </div>
                <div className={`${style['CSKH']}`}>
                    <p className={`${style.tieude}`}>cộng đồng</p>
                    <NavLink to="#">
                        <p className={`${style.footer__p}`}>Chăm sóc khách hàng</p>
                    </NavLink>
                </div>
                <div className="Address" style={{ width: '200px ' }}>
                    <p className={`${style.tieude}`}>địa chỉ</p>
                    <p className={`${style.footer__p}`}>370/35 Hàn Thuyên, Biên Hòa, Đồng Nai</p>
                    <p className={`${style.footer__p}`}>Email: dnchung@gmail.com</p>
                </div>
                <div className="social">
                    <p className={`${style.tieude}`}>social</p>
                    <a href="https://www.facebook.com/groups/393652247715226">
                        <img src="https://i.pinimg.com/originals/79/0d/29/790d29ac20dc5fc7cd5c2a61cbddb9f7.png" alt="icon__FB" style={{ width: '30px', height: '30px' }} />
                    </a>
                </div>
            </div>
        </footer >

    )
}
