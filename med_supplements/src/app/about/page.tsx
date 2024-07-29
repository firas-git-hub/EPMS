import "./page.scss";
import aboutUsData from "../../data/aboutUs.json";
import { Card, CardContent } from "@mui/material";
import JsonParagraphsDataFormatService from "@/services/JsonParagraphsHelper";

export default function aboutUs() {
    let numberedListItemCounterObj = {
        index: 1
    };

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
                    <div className="about-us-section_content page">
                        {
                            aboutUsData.aboutUsSection.paragraphs.map((paragraph, index) => {
                                return <>
                                    {

                                        <Card key={index}>
                                            <CardContent>
                                                <div className="img-container">
                                                    <img src={paragraph.imgSrc} />
                                                </div>
                                                {
                                                    JsonParagraphsDataFormatService.formatJsonDataText(index, paragraph, numberedListItemCounterObj, "")
                                                }
                                            </CardContent>
                                        </Card>
                                    }
                                </>
                            })
                        }
                    </div>
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
                                        {
                                            section.paragraphs.map((paragraph, index) => JsonParagraphsDataFormatService.formatJsonDataText(index, paragraph, numberedListItemCounterObj, "text"))
                                        }
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