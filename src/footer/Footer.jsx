import React from 'react';
import {footerData} from "./footer-data";
import {BiCopyright} from "react-icons/bi";

import "./Footer.css";
function Footer() {
    return (
        <footer id="contact">
            <ul>
                {footerData.footItem.map(item => <li key={item.id}>{item.item}</li>)}
            </ul>
            <ul>
                {footerData.footIcon.map(item => <li key={item.id}><item.icon className="icon"/></li>)}
            </ul>
            <p><BiCopyright />{new Date().getFullYear()} SomeCompany, Inc. All rights reserved.</p>
        </footer>
    )
}

export default Footer
