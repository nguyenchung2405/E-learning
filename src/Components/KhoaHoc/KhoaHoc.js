import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

export default function KhoaHocComponent(props) {

    const { khoa } = props;
    const img = khoa.hinhAnh;


    return (
        <div className={style.khoahoc} style={{
            backgroundImage: `url(${img})`,
            height: '380px',
        }}>
            <div className={`${style['khoahoc-ten']}`}>
                <h2 style={{ textAlign: 'left', color: `${props?.color}` }}>{khoa.tenKhoaHoc}</h2>
            </div>
            <NavLink className={`${style.link}`} to={`/detail/${encodeURIComponent(khoa.maKhoaHoc)}`}>
                <div className={`${style['khoahoc-mua']} py-1`}>
                    <div className="row" style={{ color: `${props?.color}` }}>
                        <div className={`col-8 ${style['khoahoc-gia']}`}>
                            <span>{Intl.NumberFormat('vn-VN').format(Math.round((Math.random() + 1) * 100) * 10000)} VNĐ</span>
                        </div>
                        {props.color ?
                            <div className="col-3">
                                <button className={`${style['btn-mua-white']}`}>Mua</button>
                            </div>
                            :
                            <div className="col-3">
                                <button className={`${style['btn-mua']}`}>Mua</button>
                            </div>
                        }
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
