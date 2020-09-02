import React, {useState, useEffect} from 'react'
import './../styles/SlideCompanion.css'
import './../styles/SlideSponsor.css'
import gold from './../assets/gold.png'
import diamond from './../assets/diamond.png'
import silver from './../assets/silver.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import linh from '../assets/linh.jpg'
import huong from '../assets/huong.jpg'

export default function SlideSponsor() {
    const [mem, setMem] = useState([
        {
            image: linh,
            name: 'Nguyễn Văn Học',
            khoa: 'D18',
            rank: 'gold'
        },
        {
            image: huong,
            name: 'Trần Minh Quang',
            khoa: 'D18',
            rank: 'gold'
        },
        {
            image: huong,
            name: 'Nguyễn Việt Hương',
            khoa: 'D18',
            rank: 'silver'
        },
        {
            image: linh,
            name: 'Nguyễn Thùy Linh',
            khoa: 'D18',
            rank: 'silver'
        },
        {
            image: huong,
            name: 'Nguyễn Tiến Hải',
            khoa: 'D17',
            rank: 'diamond'
        },
        {
            image: linh,
            name: 'Đô Đô',
            khoa: 'D17',
            rank: 'diamond'
        },
    ]);

    const [indexGold, setIndexGold] = useState(0);
    const [indexSilver, setIndexSilver] = useState(0);
    const [indexDiamond, setIndexDiamond] = useState(0);

    const [goldRank, setGoldRank] = useState(mem.filter(member => {
        return member.rank === 'gold';
    }));

    const [silverRank, setSilverRank] = useState(mem.filter(member => {
        return member.rank === 'silver';
    }));

    const [diamondRank, setDiamondRank] = useState(mem.filter(member => {
        return member.rank === 'diamond';
    }));
    var carouselInterval;
    var carouselInterval2;
    var carouselInterval3;

    const startCarousel = () => {
        carouselInterval = setInterval(() => {
            toDownGold();
        }, 4000);
    };
    const startCarousel2 = () => {
        carouselInterval2 = setInterval(() => {
            toDownDiamond();
        }, 4000);
    };
    const startCarousel3 = () => {
        carouselInterval3 = setInterval(() => {
            toDownSilver();
        }, 4000);
    };

    useEffect(() => {
        startCarousel();
        startCarousel2();
        startCarousel3();
        return () => {
            clearInterval(carouselInterval);
            clearInterval(carouselInterval2);
            clearInterval(carouselInterval3);
        }
    });


    const toDownGold = () => {
        if (indexGold === goldRank.length-1) {
            setIndexGold(0);
        }
        else {
            setIndexGold(indexGold+1);
        }   
    }
    const toDownSilver = () => {
        if (indexSilver === silverRank.length-1) {
            setIndexSilver(0);
        }
        else {
            setIndexSilver(indexSilver+1);
        }  
    }
    const toDownDiamond = () => {
        if (indexDiamond === diamondRank.length-1) {
            setIndexDiamond(0);
        }
        else {
            setIndexDiamond(indexDiamond+1);
        }  
    }
    

    return (
        <div className="sponsors">
            <div className="gold">
                <div className="cup-gold">
                    <img className="image" src={gold} alt="gold" />
                </div>
                <div className="ava-spon" style={{backgroundImage: "url(" + goldRank[indexGold].image + ")"}}>
                </div>
                <p className="name-spon">{goldRank[indexGold].name}</p>
                <p className="khoa-spon">{goldRank[indexGold].khoa}</p>
                {/* <i className="fa fa-angle-down control-sponsor"
                    onClick={toDownGold}
                ></i> */}
                <FontAwesomeIcon icon={faAngleDown} className="fa fa-angle-down control-sponsor"
                    onClick={toDownGold}/>
            </div>
            <div className="diamond">
            <div className="cup-diamond">
                <img className="image" src={diamond} alt="diamond" />
            </div>
                <div className="ava-spon" style={{backgroundImage: "url(" + diamondRank[indexDiamond].image + ")"}}>
                </div>
                <p className="name-spon">{diamondRank[indexDiamond].name}</p>
                <p className="khoa-spon">{diamondRank[indexDiamond].khoa}</p>
                {/* <i className="fa fa-angle-down control-sponsor"
                    onClick={toDownDiamond}
                ></i> */}
                <FontAwesomeIcon icon={faAngleDown} className="fa fa-angle-down control-sponsor"
                    onClick={toDownDiamond}/>
            </div>
            <div className="silver">
            <div className="cup-silver">
                <img className="image" src={silver} alt="silver" />
            </div>
                <div className="ava-spon" style={{backgroundImage: `url(${silverRank[indexSilver].image})`}}>
                </div>
                {/* <div className="ava-spon" style={{backgroundImage: "url(" + silverRank[indexSilver].image + ")"}}>
                </div> */}
                <p className="name-spon">{silverRank[indexSilver].name}</p>
                <p className="khoa-spon">{silverRank[indexSilver].khoa}</p>
                {/* <i className="fa fa-angle-down control-sponsor"
                    onClick={toDownSilver}
                ></i> */}
                <FontAwesomeIcon icon={faAngleDown} className="fa fa-angle-down control-sponsor"
                    onClick={toDownSilver}/>
            </div>
        </div>
    )
}

