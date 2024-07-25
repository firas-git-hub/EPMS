"use client";

import { FC, useEffect, useState } from "react";
import "./navbar.scss";
import React from "react";
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname } from "next/navigation";
import { MenuOutlined } from "@mui/icons-material";
import jsonData from "../../data/navbar.json";
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StorefrontIcon from '@mui/icons-material/Storefront';

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
            name: "home",
            path: "/"
        },
        {
            name: "about",
            path: "/about"
        },
        {
            name: "contactus",
            path: "/contactus"
        },
        {
            name: "news",
            path: "/news"
        },
        {
            name: "shop",
            path: "/shop"
        }
    ];

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const homeMenuIcons: any = {
        home: <HomeIcon />,
        about: <QuestionMarkIcon />,
        contactus: <ContactPhoneIcon />,
        news: <NewspaperIcon />,
        shop: <StorefrontIcon />
    }

    let data: any = jsonData;

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {pages.map((element, index) => (
                    <ListItem key={index} disablePadding className={pathname == "" + element.path ? "active-drawer-button" : ""}>
                        <ListItemButton href={element.path}>
                            <ListItemIcon>
                                {homeMenuIcons[element.name] ? homeMenuIcons[element.name] : ""}
                            </ListItemIcon>
                            <ListItemText primary={data[element.name]} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className="grid-container navbar">
            <div className="grid-item flagship img-container">
                <img src="/epms_logo_trnsprt_bg.png" />
            </div>
            <div className={"nav-button grid-item flex--row tabs"}>
                {
                    pages.map((element, index) =>
                        <Button className={pathname == "" + element.path ? "active-tab" : ""} disableRipple key={index} href={element.path}>{element.name}</Button>
                    )
                }
            </div>
            <div className={"drawer"}>
                <Button
                    sx={{
                        color: "white"
                    }}
                    onClick={toggleDrawer(true)}>
                    <MenuOutlined sx={{ fontSize: "2.5rem" }} />
                </Button>
                <Drawer className="nav-menu" open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>
        </div>
    );
}

export default Navbar;