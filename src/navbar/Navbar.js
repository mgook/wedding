import ActiveMenuLink from "active-menu-link";
import React from "react";
import { useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
    useEffect(() => {
        new ActiveMenuLink(".Navbar");
    });

    return (
        <div className="Navbar">
            <ul className="Navbar-items">
                <li><a href="#Intro">초대인사</a></li>
                <li><a href="#PhotoGallery">갤러리</a></li>
                <li><a href="#Calendar">시간/장소</a></li>
                <li><a href="#Cong">축하인사</a></li>
            </ul>
        </div>
    );

}