import { FC } from "react";
import "./navbar.scss";
import React from "react";
import { Button } from "@mui/material";
import VaccinesIcon from "@mui/icons-material/Vaccines";

interface NavbarProps {
    children?: React.ReactNode;
    index?: number;
    value?: number;
}



const Navbar: FC<NavbarProps> = (props) => {
    let name = "Medi Products";
    let pages = [
        {
            name: "About",
            path: "about"
        },
        {
            name: "Contact us",
            path: "contactus"
        },
        {
            name: "news",
            path: "news"
        },
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Shop",
            path: "shop"
        }];

    return (
        <div className="flex--row navbar">
            <div className="flex--row flagship">
                <VaccinesIcon className="icon"></VaccinesIcon>
                <p className="name unselectable" >
                    {name}
                </p>
            </div>
            <div className="flex--row tabs">
                {
                    pages.map((element, index) =>
                        <Button disableRipple key={index} href={element.path}>{element.name}</Button>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;