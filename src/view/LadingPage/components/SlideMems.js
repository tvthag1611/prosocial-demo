import React, { useState, useEffect} from 'react'
import '../styles/SlideMems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/ProPTIT.png'

export default function Mem() {
    const [mem,setMem] = useState([
        [{
            image: logo,
            name: 'Lê Thanh Bình',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Bùi Văn Cường',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Bùi Quang Dương',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Đào Bích Diệp',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Vương Đình Doanh',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Nguyễn Duy Dũng',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Lê Hồng Dương',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Cồ Thị Phương Hoa',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Phạm Trung Huy',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Phạm Thị Thanh Hảo',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Nguyễn Văn Hậu',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Trần Thị Hằng',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Kiều Đức Long',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Nguyễn Văn Lực',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Nguyễn Thị Quỳnh Mai',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Hoàng Đức Minh',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Lê Xuân Minh',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Phạm Thị Nga',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Nguyễn Minh Phương',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Đỗ Thị Thu Thảo',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Nguyễn Thị Huyền Trang',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Nguyễn Thị Quỳnh Trang',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Bùi Quang Trường',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Nguyễn Mạnh Tuân',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Nguyễn Thị Uyên',
            khoa: 'D19'
        },
        {
            image: logo,
            name: 'Trần Đăng Dũng',
            khoa: 'D19'
        }],

        //d18

        [{
            image: logo,
            name: 'Nguyễn Việt Hương',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Nguyễn Văn Tuệ',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Bùi Phương Ngọc Mai',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Trần Minh Quang',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Trần Văn Thắng',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Lê Bá Hoài',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Nguyễn Phương Thảo',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Nguyễn Đình Tài',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Nguyễn Văn Học',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Vũ Đình Công',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Đỗ Thị Thanh Thanh',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Nguyễn Văn Hiếu',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Nguyễn Thùy Linh',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Nguyễn Hoài Đức',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Ngô Tuấn Kiệt',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Nguyễn Trung Thành',
            khoa: 'D18'
        },
        {
            image: logo,
            name: 'Nguyễn Văn Hòa',
            khoa: 'D18'
        }],


        //d17
        [{
            image: logo,
            name: 'Nguyễn Thị Huyền',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Nguyễn Tùng Lâm',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Nguyễn Thế Anh',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Lê Khắc Tuấn Anh',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Phan Đức Duẩn',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Nguyễn Đức Hạnh',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Trần Việt Huy',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Hồ Quốc Cường',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Phùng Quốc Đức',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Nguyễn Tiến Hải',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Nguyễn Viết Thành Đạt',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Nguyễn Minh Hiếu',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Đỗ Mai Phương',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Nguyễn Mạnh Cường',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Nguyễn Văn Sơn',
            khoa: 'D17'
        },
        {
            image: logo,
            name: 'Trần Duy Công Khanh',
            khoa: 'D17'
        }]
    ]);
    const [index, setIndex] = useState([
        {
            index1: 0,
            index2: 1,
            index3: 2,
            index4: 3
        },
        {
            index1: 0,
            index2: 1,
            index3: 2,
            index4: 3
        },
        {
            index1: 0,
            index2: 1,
            index3: 2,
            index4: 3
        }
    ]);

    var carouselInterval;

    const startCarousel = () => {
        carouselInterval = setInterval(() => {
            toLeft(0);
            toRight(1);
            toLeft(2);
        }, 4000);
    };

    useEffect(() => {
        startCarousel();
        return () => {
            clearInterval(carouselInterval);
        }
    });

    const toRight = (khoa) => {
        var arr = [...index];
        if (index[khoa].index1 === 0) {
            arr[khoa].index1 =  mem[khoa].length - 4;
            // arr[khoa].index2 = mem[khoa].length - 3;
            // arr[khoa].index3 = mem[khoa].length - 2;
            // arr[khoa].index4 = mem[khoa].length - 1;
            setIndex([...arr]);
        }
        else {
            arr[khoa].index1 = index[khoa].index1-1;
            // arr[khoa].index2 = index[khoa].index2-1;
            // arr[khoa].index3 = index[khoa].index3-1;
            // arr[khoa].index4 = index[khoa].index4-1;
            setIndex([...arr]);
        }
    }
    const toLeft = (khoa) => {
        var arr = [...index];

        if (index[khoa].index1 === mem[khoa].length-1) {
            arr[khoa].index1 = 0;
            // arr[khoa].index2 = 1;
            // arr[khoa].index3 = 2;
            // arr[khoa].index4 = 3;

            setIndex([...arr]);
        }
        else {
            arr[khoa].index1++;
            // arr[khoa].index2++;
            // arr[khoa].index3++;
            // arr[khoa].index4++;
            setIndex([...arr]);
        }
    }
    const show = mem.map((item, Index) => 
        <div className="khoa" key={Index}>
            <FontAwesomeIcon icon={faAngleLeft} className="control" onClick={() => toLeft(mem.indexOf(item))}/>
            <div className="show-mem">
                <div className="ava-mem" style={{backgroundImage: "url(" + item[index[mem.indexOf(item)].index1].image + ")"}}></div>
                <p className="name-mem">{item[index[mem.indexOf(item)].index1].name}</p>
                <p className="khoa-mem">{item[index[mem.indexOf(item)].index1].khoa}</p>
            </div>
            {/* <div className="show-mem">
                <div className="ava-mem" style={{backgroundImage: "url(" + item[index[mem.indexOf(item)].index2].image + ")"}}></div>
                <p className="name-mem">{item[index[mem.indexOf(item)].index2].name}</p>
                <p className="khoa-mem">{item[index[mem.indexOf(item)].index2].khoa}</p>
            </div>
            <div className="show-mem">
                <div className="ava-mem" style={{backgroundImage: 'url(' + item[index[mem.indexOf(item)].index3].image + ")"}}></div>
                <p className="name-mem">{item[index[mem.indexOf(item)].index3].name}</p>
                <p className="khoa-mem">{item[index[mem.indexOf(item)].index3].khoa}</p>
            </div>
            <div className="show-mem">
                <div className="ava-mem" style={{backgroundImage: 'url(' + item[index[mem.indexOf(item)].index4].image + ")"}}></div>
                <p className="name-mem">{item[index[mem.indexOf(item)].index4].name}</p>
                <p className="khoa-mem">{item[index[mem.indexOf(item)].index4].khoa}</p>
            </div> */}
            <FontAwesomeIcon icon={faAngleRight} className="control" onClick={() => toRight(mem.indexOf(item))}/>
        </div>
    ) 

    return (
        <div className="members">
            {show}
        </div>
    )
}