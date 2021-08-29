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
                    <li><a href="/#" onClick={()=> slideClose()}>Home</a> </li>
                    <li><a href="#features" onClick={()=> slideClose()}>Features</a> </li>
                    <li><a href="#blog" onClick={()=> slideClose()}>Blog</a> </li>
                    <li><a href="#contact" onClick={()=> slideClose()}>Contact</a> </li>
                    <li>Search <AiOutlineSearch className="search-icon"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Slider
