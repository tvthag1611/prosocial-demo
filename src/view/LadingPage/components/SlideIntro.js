import React, { useState, useEffect } from 'react'
import '../styles/SlideIntro.css'
import anhIntro from '../assets/clb.JPG'
import d17 from '../assets/introD17.jpg'
import d18 from '../assets/introD18.jpg'

export default function Intro() {
    return (
        // <div className="intros" style={{backgroundImage: `url(${anhIntro})`, backgroundPosition:'right top', backgroundRepeat: 'no-repeat', backgroundSize: '70%'}}>
        //     <div className="contentIntro">
        //         <p> CLB Lập trình PTIT -
        //     Programming PTIT CLUB <br />
        //     Tên viết tắt: PROPTIT<br />
        //     Slogan của CLB: LẬP TRÌNH PTIT - LẬP TRÌNH TỪ TRÁI TIM ❤ <br />
        //     Phương châm hoạt động: Chia sẻ để cùng nhau phát triển. <br />
        //     Với mục đích nâng cao phong trào học lập trình của sinh viên trong và ngoài trường, 
        //     góp phần đưa lập trình là một thế mạnh của Học viện. Vào ngày 9/10/2011, 
        //     CLB đã chính thức được thành lập từ các bạn sinh viên yêu CNTT và 
        //     yêu lập trình trong Học viện. <br />
        //     Các thành viên trong CLB được thỏa sức giao lưu, nghiên cứu các dự án, 
        //     học tập các môn lập trình và các môn học khác trong trường.
        //     Ngoài ra, khi tham gia vào PROPTIT các bạn sinh viên còn được trau dồi thêm các 
        //     kỹ năng cần thiết như: kỹ năng làm việc nhóm, kỹ năng thuyết trình, kỹ năng tổ chức 
        //     sự kiện, kỹ năng quản lý nhân sự, dự án…</p>
        //     </div>
        //     <div className="titleIntro">
        //     </div>
        //     <div className="description">
        //         <h3>INTRODUCE</h3>
        //         <p>CLB Lập trình PTIT - Programming PTIT CLUB</p>
        //     </div>

        // </div>
        <div className="intros">
            <div className="firstLine">
                <div className="description">
                    <h3>INTRODUCE</h3>
                    <p>CLB Lập trình PTIT - Programming PTIT CLUB</p>
                </div>
                <img src={d17} />
                <img src={d18} />
            </div>
            <div className="secondLine">
                <img src={anhIntro} />
                <p>
                    Tên viết tắt: PROPTIT<br />
            Slogan của CLB: LẬP TRÌNH PTIT - LẬP TRÌNH TỪ TRÁI TIM ❤ <br />
            Phương châm hoạt động: Chia sẻ để cùng nhau phát triển. <br />
            Với mục đích nâng cao phong trào học lập trình của sinh viên trong và ngoài trường,
            góp phần đưa lập trình là một thế mạnh của Học viện. Vào ngày 9/10/2011,
            CLB đã chính thức được thành lập từ các bạn sinh viên yêu CNTT và
            yêu lập trình trong Học viện. <br />
            Các thành viên trong CLB được thỏa sức giao lưu, nghiên cứu các dự án,
            học tập các môn lập trình và các môn học khác trong trường.
            Ngoài ra, khi tham gia vào PROPTIT các bạn sinh viên còn được trau dồi thêm các
            kỹ năng cần thiết như: kỹ năng làm việc nhóm, kỹ năng thuyết trình, kỹ năng tổ chức
            sự kiện, kỹ năng quản lý nhân sự, dự án…</p>
            </div>
        </div>
    )
}
{/* <p>Hiện tại, PROPTIT có 4 team dự án:</p>
            <div className="team">
                <div className="ai">
                    <p>Team AI (Trí Tuệ Nhân Tạo)</p>
                </div>
                <div className="web">
                    <p>Team Web</p>
                </div>
                <div className="mobile">
                    <p>Team Mobile</p>
                </div>
                <div className="unity">
                    <p>Team Unity</p>
                </div>
            </div> */}