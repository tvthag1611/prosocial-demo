import React, {useState, useEffect} from 'react'
import './../styles/SlideCompanion.css'
import linh from '../assets/ProPTIT.png'

export default function SlideCompanion() {
    const [mem, setMem] = useState([
        {
            image: linh,
            name: 'Trần Văn Thắng',
            khoa: 'D18'
        },
        {
            image: linh,
            name: 'Nguyễn Thế Anh',
            khoa: 'D17'
        },
        {
            image: linh,
            name: 'Nguyễn Việt Hương',
            khoa: 'D18'
        },
        {
            image: linh,
            name: 'Nguyễn Tiến Hải',
            khoa: 'D17'
        },
        {
            image: linh,
            name: 'Trần Duy Công Khanh',
            khoa: 'D17'
        },
    ]);

    const [index, setIndex] = useState({
        index1: 0,
        index2: 1,
        index3: 2
    })

    var carouselInterval;

    const startCarousel = () => {
        carouselInterval = setInterval(() => {
            toLeft();
        }, 4000);
    };

    useEffect(() => {
        startCarousel();
        return () => {
            clearInterval(carouselInterval);
        }
    });

    const toRight = () => {
        if (index.index1 === 0) {
            setIndex({
                index1: mem.length - 3,
                index2: mem.length - 2,
                index3: mem.length - 1
            });
        }
        else {
            setIndex({
                index1: index.index1-1,
                index2: index.index2-1,
                index3: index.index3-1
            });
        }
    }
    const toLeft = () => {
        if (index.index3 === mem.length-1) {
            setIndex({
                index1: 0,
                index2: 1,
                index3: 2
            });
        }
        else {
            setIndex({
                index1: index.index1+1,
                index2: index.index2+1,
                index3: index.index3+1
            });
        }
    }

    return (
        <div className="get-mem">
            <i className="fa fa-angle-left control"
                onClick={toLeft}
            ></i>
            <div className="show-mem">
                <div className="ava-mem" style={{backgroundImage: "url(" + mem[index.index1].image + ")"}}></div>
                <p className="name-mem">{mem[index.index1].name}</p>
                <p className="khoa-mem">{mem[index.index1].khoa}</p>
            </div>
            <div className="show-mem">
                <div className="ava-mem" style={{backgroundImage: "url(" + mem[index.index2].image + ")"}}></div>
                <p className="name-mem">{mem[index.index2].name}</p>
                <p className="khoa-mem">{mem[index.index2].khoa}</p>
            </div>
            <div className="show-mem">
                <div className="ava-mem" style={{backgroundImage: 'url(' + mem[index.index3].image + ")"}}></div>
                <p className="name-mem">{mem[index.index3].name}</p>
                <p className="khoa-mem">{mem[index.index3].khoa}</p>
            </div>
            <i className="fa fa-angle-right control"
                onClick={toRight}
            ></i>
        </div>
    )
}

