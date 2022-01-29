import ActiveMenuLink from "active-menu-link";
import React from "react";
import { useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
    useEffect(() => {
        new ActiveMenuLink(".Navbar");
    });

    return (
        <nav className="Navbar" >
            <ul className="Navbar-items">
                <li><a href="#Intro">초대인사</a></li>
                <li><a href="#PhotoGallery">갤러리</a></li>
                <li><a href="#Location">오시는 길</a></li>
                <li><a href="#lv-container">축하인사</a></li>
            </ul>
        </nav>
    );

}