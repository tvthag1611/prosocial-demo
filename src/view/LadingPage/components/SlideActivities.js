import React, { useState, useEffect } from 'react'
import '../styles/SlideActivities.css'
import s2bBirthday from '../assets/sinhNhats2b.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import spoj from '../assets/Tournament.png'
import game from '../assets/game.jpg'

export default function Activities() {

    const [competition, setCompetition] = useState([
        {
            name: 'PROGAPP',
            image: spoj,
        },
        {
            name: 'SPOJ TOURNAMENT',
            image: spoj,
        },
        {
            name: 'Game C++',
            image: game,
        },
        {
            name: 'PAMA-CUP',
            image: spoj,
        },
        {
            name: 'PROCWARS',
            image: spoj,
        },
    ]);

    const [ngoaiKhoa, setNgoaiKhoa] = useState([
        {
            name: 'Tổ chức sinh nhật CLB',
            image: s2bBirthday
        },
        {
            name: 'Mini Game',
            image: ''
        },
        {
            name: ' Big Game S2B',
            image: ''
        },
        {
            name: 'Tham quan dã ngoại',
            image: ''
        },
        {
            name: 'Cuộc thi chạy Run PROPTIT',
            image: ''
        },

    ]);

    const [indexCompetition, setIndexCompetition] = useState(0);
    const [indexNgoaiKhoa, setIndexNgoaiKhoa] = useState(0);

    const [classesCom, setClassesCom] = useState('');
    const [classesNK, setClassesNK] = useState('');

    var carouselInterval;
    var carouselInterval2;

    const startCarousel = () => {
        carouselInterval = setInterval(() => {
            toDownCompetition();
        }, 4000);
    };
    const startCarousel2 = () => {
        carouselInterval2 = setInterval(() => {
            toDownNgoaiKhoa();
        }, 4000);
    };
    // const animate = () => {
    //     setInterval(() => {
    //         setClasses('');
    //     }, 10000);
    // };

    useEffect(() => {
        startCarousel();
        startCarousel2();
        // animate();
        return () => {
            clearInterval(carouselInterval);
            clearInterval(carouselInterval2);
        }
    });


    const toDownCompetition = () => {
        // setClasses('');
        if (indexCompetition === competition.length - 1) {
            setIndexCompetition(0);
        }
        else {
            setIndexCompetition(indexCompetition + 1);
        }
        setClassesCom('animate__animated animate__slideInUp animate__faster 2s');
        // setClasses('img animate__animated animate__slideOutUp 1s');
        setTimeout(() => {
            setClassesCom('');
        }, 700)

    }
    const toDownNgoaiKhoa = () => {
        if (indexNgoaiKhoa === ngoaiKhoa.length - 1) {
            setIndexNgoaiKhoa(0);
        }
        else {
            setIndexNgoaiKhoa(indexNgoaiKhoa + 1);
        }
        setClassesNK('animate__animated animate__slideInUp animate__faster 2s');
        // setClasses('img animate__animated animate__slideOutUp 1s');
        setTimeout(() => {
            setClassesNK('');
        }, 700)
    }

    return (
        <div className="activities">
            <div className="description">
                <h3>ACTIVITIES</h3>
                <p className="introActi">PROPTIT luôn tạo điều kiện để các bạn
                sinh viên có một môi trường học tập năng động, sáng tạo và cùng giúp đỡ nhau
                để có thành tích tốt trong học tập.
            PROPTIT luôn tổ chức các hoạt động thường niên để các thành viên trong CLB tham gia</p>
            </div>
            <div className="main">
                <h3>Cuộc thi</h3>
                <p>{competition[indexCompetition].name}</p>
                <div className="img">
                    <div className={classesCom}>
                        <img
                            src={competition[indexCompetition].image} alt="clb"
                            style={{ width: '100%' }}
                        // className={classes}
                        />
                    </div>

                </div>

                <br />
                <FontAwesomeIcon icon={faAngleDoubleDown} className="control blur" onClick={() => toDownCompetition()} />
            </div>
            <div className="out">
                <h3>Hoạt động ngoại khóa</h3>
                <p>{ngoaiKhoa[indexNgoaiKhoa].name}</p>
                <div className="img">
                    <div className={classesNK}>
                        <img
                            src={ngoaiKhoa[indexNgoaiKhoa].image} alt="clb"
                            style={{ width: '100%' }}
                        />
                    </div>

                </div>
                <FontAwesomeIcon icon={faAngleDoubleDown} className="control" onClick={() => toDownNgoaiKhoa()} />

            </div>

        </div>
    )
}
