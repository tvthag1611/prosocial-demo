import React, {useState, useEffect} from 'react'
import './../styles/SlideHeader.css'
import logo from './../assets/ProPTIT.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import 'animate.css'


export default function Header() {

    const [classes, setClasses] = useState('headers');
    const [respon, setRespon] = useState('menu');
    const [isShow, setIsShow] =useState(true);

    const clickBars = () => {
        setIsShow(!isShow);
        if(isShow)
        {
            setRespon('menu show');
            if(window.innerWidth <= 768) {
                setClasses('headers animate__animated animate__slideInDown sticky');
            }
        }
        else 
        {
            setRespon('menu');
            if(window.pageYOffset < 100)
            {
                setClasses('headers')
            }
        }
    } 

    useEffect(()=> {
        window.onscroll = () => {
            if(window.pageYOffset >= 100)
            {
                setClasses('headers animate__animated animate__slideInDown sticky');
            }
            else
            {
                if(isShow) setClasses('headers');
                else if(window.innerWidth <= 768)
                {
                    setClasses('headers animate__animated animate__slideInDown sticky');
                } else setClasses('headers sticky ');
            }
        }
    })

    const showBars = () => {
        setIsShow(!isShow);
    }

    return (
        <div className={classes} id="headers">
            <div className="logoclb">
                <a href='#row' className="home">
                    <img className="imageLogo" src={logo} alt="logo" />
                </a>
                <FontAwesomeIcon icon={faBars} size="3x" className="bars" onClick={()=>clickBars()}/>
            </div>
            <div className= {respon}>
                <a href='#intros' onClick={() => clickBars()}>Introduce</a>
                <a href='#activities' onClick={() => clickBars()}>Activities</a>
                <a href='#members' onClick={() => clickBars()}>Members</a>
                <a href='#sponsors' onClick={() => clickBars()}>Sponsors</a>
                <a href='#companions' onClick={() => clickBars()}>Contributors</a>
            </div>
            
        </div>
    )
}