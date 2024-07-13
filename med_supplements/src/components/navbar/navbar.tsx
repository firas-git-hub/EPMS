"use client";

import { FC } from "react";
import "./navbar.scss";
import React from "react";
import { Button } from "@mui/material";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import { usePathname } from "next/navigation";

interface NavbarProps {
    children?: React.ReactNode;
    index?: number;
    value?: number;
}


const Navbar: FC<NavbarProps> = (props) => {
    let name = "Medi Products";
    let pathname = usePathname();
    let pages = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact us",
            path: "/contactus"
        },
        {
            name: "News",
            path: "/news"
        },
        {
            name: "Shop",
            path: "/shop"
        }
    ];

    return (
        <div className="grid-container navbar">
            <div className="grid-item flagship img-container">
                <img src="/epms_logo_trnsprt_bg.png" />
            </div>
            <div className="nav-button grid-item flex--row tabs">
                {
                    pages.map((element, index) =>
                        <Button className={pathname == "" + element.path ? "active-tab" : ""} disableRipple key={index} href={element.path}>{element.name}</Button>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;