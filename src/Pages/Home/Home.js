import React from 'react';
import { useSelector } from 'react-redux';
import KhoaHocComponent from '../../Components/KhoaHoc/KhoaHoc';
import Slider from "react-slick";
import { Carousel } from 'antd';
import './style.css';

export default function Home() {

    const { mangKH } = useSelector(state => state.khoaHocReducer);

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

    const renderKHBackEnd = () => {
        const arrBackEnd = [];
        for (let KH of mangKH) {
            if (KH.danhMucKhoaHoc.tenDanhMucKhoaHoc === 'Lập trình Backend') {
                arrBackEnd.push(KH);
            }
        }
        return arrBackEnd.map((khoaBE, index) => {
            return <>
                <KhoaHocComponent color='white' khoa={khoaBE} key={index} />
            </>
        })
    }

    const renderTKWeb = () => {
        const arrTKWeb = [];
        for (let KH of mangKH) {
            if (KH.danhMucKhoaHoc.maDanhMucKhoahoc === 'Design') {
                arrTKWeb.push(KH);
            }
        }
        return arrTKWeb.map((khoaTKWeb, index) => {
            return <>
                <KhoaHocComponent color='white' khoa={khoaTKWeb} key={index} />
            </>
        })
    }

    const renderFullStack = () => {
        const arrFullStack = [];
        for (let KH of mangKH) {
            if (KH.danhMucKhoaHoc.maDanhMucKhoahoc === 'FullStack') {
                arrFullStack.push(KH);
            }
        }
        return arrFullStack.map((khoaFullStack, index) => {
            return <>
                <KhoaHocComponent color='white' khoa={khoaFullStack} key={index} />
            </>
        })
    }

    const renderLTMobile = () => {
        const arrMobile = [];
        for (let KH of mangKH) {
            if (KH.danhMucKhoaHoc.maDanhMucKhoahoc === 'DiDong') {
                arrMobile.push(KH);
            }
        }
        return arrMobile.map((khoaMobile, index) => {
            return <>
                <KhoaHocComponent color='white' khoa={khoaMobile} key={index} />
            </>
        })
    }

    const renderTuDuyLT = () => {
        const arrTDLT = [];
        for (let KH of mangKH) {
            if (KH.danhMucKhoaHoc.maDanhMucKhoahoc === 'TuDuy') {
                arrTDLT.push(KH);
            }
        }
        return arrTDLT.map((khoaMobile, index) => {
            return <>
                <KhoaHocComponent color='white' khoa={khoaMobile} key={index} />
            </>
        })
    }

    const renderFrontEnd = () => {
        const arrFE = [];
        for (let KH of mangKH) {
            if (KH.danhMucKhoaHoc.maDanhMucKhoahoc === 'FrontEnd') {
                arrFE.push(KH);
            }
        }
        return arrFE.map((khoaMobile, index) => {
            return <>
                <KhoaHocComponent color='white' khoa={khoaMobile} key={index} />
            </>
        })
    }


    return (
        <div className='pb-5' style={{ backgroundColor: '#1d1e22' }}>
            <Carousel autoplay style={{ marginTop: '60px', height: '500px' }} dots={false}>
                <div className="carousel carousel1" >

                </div>
                <div className="carousel carousel2" >

                </div>
                <div className="carousel carousel3" >

                </div>
                <div className="carousel carousel4" >

                </div>
            </Carousel>
            <div className="container" style={{ marginTop: '3rem' }}>
                <div className="backend">
                    <h3 className='text-white'>Lập trình Back End</h3>
                    <div className="backend-KH">
                        <Slider {...settings}>
                            {renderKHBackEnd()}
                        </Slider>
                    </div>
                </div>
                <div className="TK-Web mt-5">
                    <h3 className='text-white'>Thiết kế Web</h3>
                    <div className="TK-Web-KH">
                        <Slider {...settings}>
                            {renderTKWeb()}
                        </Slider>
                    </div>
                </div>
                <div className="TK-Web mt-5">
                    <h3 className='text-white'>Lập trình Full Stack</h3>
                    <div className="TK-Web-KH">
                        <Slider {...settings}>
                            {renderFullStack()}
                        </Slider>
                    </div>
                </div>
                <div className="TK-Web mt-5">
                    <h3 className='text-white'>Lập trình Di Động</h3>
                    <div className="TK-Web-KH">
                        <Slider {...settings}>
                            {renderLTMobile()}
                        </Slider>
                    </div>
                </div>
                <div className="TK-Web mt-5">
                    <h3 className='text-white'>Tư duy lập trình</h3>
                    <div className="TK-Web-KH">
                        <Slider {...settings}>
                            {renderTuDuyLT()}
                        </Slider>
                    </div>
                </div>
                <div className="TK-Web mt-5">
                    <h3 className='text-white'>Lập trình Front End</h3>
                    <div className="TK-Web-KH">
                        <Slider {...settings}>
                            {renderFrontEnd()}
                        </Slider>
                    </div>
                </div>

            </div>
        </div>


    )
}
