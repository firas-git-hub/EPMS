import "./page.scss";
import aboutUsData from "../../data/aboutUs.json";
import { Card, CardContent } from "@mui/material";

export default function aboutUs() {
    return (
        <>
            <div className="about-us-page fit-navbar-screen">
                <div className="about-us-section">
                    <div className="header">
                        <p className="title">
                            {
                                aboutUsData.aboutUsSection.title
                            }
                        </p>
                    </div>
                    {
                        aboutUsData.aboutUsSection.content.map((contentItem, index) => {
                            return <>
                                <div className="about-us-section_content page" key={index}>
                                    {
                                        contentItem.elements.map((element, index) => {
                                            return <>
                                                <Card key={index}>
                                                    <CardContent>
                                                        <div className="img-container">
                                                            <img src={element.imgSrc} />
                                                        </div>
                                                        <p>
                                                            {element.text}
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                            </>
                                        })
                                    }
                                </div>
                            </>
                        })
                    }
                </div>
                <div className="sections">
                    {
                        aboutUsData.sections.map((section, index) => {
                            return <>
                                <div key={index} className="section">
                                    <p className="title">
                                        {section.title}
                                    </p>
                                    <div className="diagonal-seperator"></div>
                                    <div className="content">
                                        {section.content.map((item, index) => {
                                            return <>
                                                <p className="text">
                                                    {
                                                        getSymbol(item.type) + item.text
                                                    }
                                                </p>
                                            </>
                                        })}
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </>
    );
}

let getSymbol = (type: string): string => {
    if (type == "list") {
        return "\u2022\u0020";
    }
    else {
        return "";
    }
}