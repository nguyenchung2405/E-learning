import React from 'react'
import { useSelector } from 'react-redux';
import KhoaHocComponent from '../../Components/KhoaHoc/KhoaHoc';
import Slider from "react-slick";

export default function KhoaHoc(props) {

    const { mangKH } = useSelector(state => state.khoaHocReducer);

    const { tenKhoaHoc } = props.match.params;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false
    };

    const renderKhoaHoc = () => {
        return mangKH.map((KH, index) => {

            if (KH.danhMucKhoaHoc.tenDanhMucKhoaHoc === tenKhoaHoc) {
                return (
                    <>
                        <KhoaHocComponent color='white' khoa={KH} key={index} />
                    </>
                )
            }

        })
    };

    return (
        <div className="py-5" style={{ backgroundColor: '#1d1e22' }}>
            <div className="container" style={{ marginTop: '60px' }}>
                <h3 className="text-white">{`${tenKhoaHoc}`}</h3>
                <Slider {...settings}>
                    {renderKhoaHoc()}
                </Slider>
            </div>
        </div>
    )
}
