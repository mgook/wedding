import ActiveMenuLink from "active-menu-link";
import React from "react";
import "./Navbar.css";

export default class Navbar extends React.Component {
    componentDidMount() {
        new ActiveMenuLink(".navbar");
    }

    render() {
        return (
            <nav className="navbar" >
                <ul class="navbar-items">
                    <li><a href="#Intro">초대인사</a></li>
                    <li><a href="#Gallery">갤러리</a></li>
                    <li><a href="#WayToCome">오시는 길</a></li>
                    <li><a href="#Cong">축하인사</a></li>
                </ul>
            </nav>
        );
    }
}