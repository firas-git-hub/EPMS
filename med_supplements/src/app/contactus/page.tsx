"use client";

import "./page.scss";
import jsonData from "../../data/contactUs.json";
import JsonParagraphsDataFormatService from "@/services/JsonParagraphsHelper";
import { FormControl, InputLabel, Input } from "@mui/material";
import ContactUsForm from "@/components/contactUsForm/contactUsForm";

export default function contactUs() {

    let numberedListItemCounterObj = {
        index: 0
    };

    return (
        <div className="contactus">
            <div className="contactus-info fit-navbar-screen">
                <p className="title">
                    {jsonData.infoSection.title}
                </p>
                <div className="content">
                    {
                        jsonData.infoSection.infos.map((info, index) => {
                            return (
                                <div key={index} className={info.title.toLowerCase() + " block"} onClick={info.title.toLowerCase() == "address" ? handleLocationClick : undefined}>
                                    <div className="img-container">
                                        <img src={info.imgSrc} />
                                    </div>
                                    <p className="title">
                                        {
                                            info.title
                                        }
                                    </p>
                                    {
                                        info.paragraphs.map((paragraph, index) => JsonParagraphsDataFormatService.formatJsonDataText(index, paragraph, numberedListItemCounterObj))
                                    }
                                    <div className={(info.title.toLowerCase() == "address" ? "" : "hidden") + " block-background"}>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <div className="contactus-form fit-navbar-screen">
                <div className="content">
                    <p className="title">{jsonData.formSection.title}</p>
                    {
                        jsonData.formSection.paragraphs.map((paragraph, index) => JsonParagraphsDataFormatService.formatJsonDataText(index, paragraph, numberedListItemCounterObj, "content__phrase"))
                    }
                </div>  
                <div className="form">
                    <ContactUsForm></ContactUsForm>
                </div>
            </div> */}
        </div>
    )
}

let handleLocationClick = () => {
    window.open(jsonData.infoSection.locationLink, "_blank")?.focus();
}