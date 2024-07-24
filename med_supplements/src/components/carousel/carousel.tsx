import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClickableCard from "../clickableCard/clickableCard";

export interface carouselProps {
    settings?: {
        dots?: boolean,
        rtl?: boolean,
        infinite?: boolean,
        speed?: number,
        slidesToShow?: number,
        slidesToScroll?: number,
        nextArrow?: JSX.Element,
        prevArrow?: JSX.Element,
        responsive?: any
    },
    data: any
}

const Carousel: FC<carouselProps> = (props) => {

    let data = props.data;
    return (
        <div className="slider-container">
            <Slider
                {...props.settings}
                responsive={[
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,

                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            vertical: true,
                            verticalSwiping: true
                        }
                    }
                ]}
            >
                {
                    data.map((item: any, index: any) => {
                        return (
                            <ClickableCard
                                title={item.title}
                                description={item.briefDescription}
                                key={index}
                                onClickFunc={() => { }}
                                imgSrc={item.imgSrc}>

                            </ClickableCard>
                        );
                    })
                }
            </Slider>
        </div>
    );
}

export default Carousel;