import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import  {ImCross} from "react-icons/im";
import {useSliderContext} from "../context/sliderContext";
import "./Slider.css";
function Slider() {
    const {slideClose, slide} = useSliderContext();
    return (
        <div className={`slider ${slide?"open": "close"}`}>
            <div className="slider__body">
            <ImCross className="slider__close" onClick={()=> slideClose()}/>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Search <AiOutlineSearch className="search-icon"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Slider
