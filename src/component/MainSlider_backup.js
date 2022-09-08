import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { slideid: 1, content: "01 슬라이드 제목", des: "01 슬라이드내용", link: "/1" },
    { slideid: 2, content: "02 슬라이드 제목", des: "02 슬라이드내용", link: "/2" },
    { slideid: 3, content: "03 슬라이드 제목", des: "03 슬라이드내용", link: "/3" },
]

const MainSlider = () => {
    const [num, setNum] = useState();
    const sliderRef = useRef();
    useEffect(() => {
        setNum(0)
    }, [])//처음시작(새로고침)에 .on 붙은채로 나오게 하는 법
    const slideSet = {
        dots: true,
        // afterChange: index => console.log(index),
        afterChange: index => setNum(index),
    }
    return <div>
        <>
            <Slider {...slideSet} arrows={false} ref={sliderRef}>
                {
                    SLIDE.map(
                        (sslide, idx) =>
                            <figure className={`add itm0${sslide.slideid} ${idx === num ? 'on' : ''}`} key={slideSet.slideid}>
                                <div className="slide-box">
                                    <h2>{sslide.content}</h2>
                                    <p>{sslide.des}</p>
                                    <a href={sslide.link}>more</a>
                                </div>
                            </figure>)
                }
            </Slider>
            {console.log(sliderRef.current)}

            <div>0{num + 1} / 0{SLIDE.length}</div>
            {/* .length -> (슬라이드)개수 */}
            <div className="arrows">
                <button onClick={() => sliderRef.current.slickPrev()}>PREV</button>
                <button onClick={() => sliderRef.current.slickNext()}>NEXT</button>
            </div>
            <ul className="dots">
                {
                    SLIDE.map((dots, idx) => <li className={idx === num ? 'on' : ''}
                        onClick={() => sliderRef.current.slickGoTo(idx)}
                        key={dots.slideid}>{dots.slideid}</li>)
                }
            </ul>
            <div className="content">
                <div>
                    {SLIDE[num]?.des}
                    {/* ?.문법 이해하기 ...Null 병합 연산자(??), 옵셔널 체이닝(?.) */}
                </div>
            </div>
        </>
    </div>
}

export default MainSlider;