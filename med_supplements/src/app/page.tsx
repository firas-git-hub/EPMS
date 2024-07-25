'use client';

import "./page.scss";
import { IconButton, Typography } from "@mui/material";
import homeTextData from "../data/home.json";
import supplementsJsonData from "../data/supplements.json";
import Carousel from "@/components/carousel/carousel";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import React, { ReactElement, useEffect, useState } from "react";


let CarouselPrevButton = (props: any): JSX.Element => {

	const { className, style, onClick } = props;

	return (
		<>
			<IconButton
				className={className}
				style={{ ...style, display: "block", position: "absolute" }}
				onClick={onClick}
			>
				<ArrowBackRoundedIcon
					sx={{
						fontSize: "2.5rem"
					}}
				/>
			</IconButton>
		</>
	);
}

let CarouselNextButton = (props: any): React.JSX.Element => {

	const { className, style, onClick } = props;

	return (
		<div>
			<IconButton
				className={className}
				style={{ ...style, display: "block", position: "absolute" }}
				onClick={onClick}
			>
				<ArrowForwardRoundedIcon
					sx={{
						fontSize: "2.5rem"
					}}
				/>
			</IconButton>
		</div>
	);
}


let carouselSettings = {
	nextArrow: <CarouselNextButton className="carousel-button" />,
	prevArrow: <CarouselPrevButton className="carousel-button" />,
	slidesToShow: 3,
	dots: true
}

const supplementsData = [
	{
		supplementType: "Minerals",
		settings: carouselSettings,
		data: supplementsJsonData.minerals
	},
	{
		supplementType: "Amino Acids",
		settings: carouselSettings,
		data: supplementsJsonData.aminoAcids
	},
	{
		supplementType: "Vitamins",
		settings: carouselSettings,
		data: supplementsJsonData.vitamins
	}
]

export default function Home() {
	const [hideElements, setHideElements] = useState(false);

	useEffect(() => {
		window.innerWidth < 800 ? setHideElements(true) : setHideElements(false);
		const handleResize = () => {
			window.innerWidth < 800 ? setHideElements(true) : setHideElements(false);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<div className="page">
				<div className="first-page fit-navbar-screen">
					<div className="first-page__slogan">
						<p className="main-title">
							{homeTextData.firstPageMainTitle}
						</p>
						<p className="sub-title">
							{homeTextData.firstPageSubTitle}
						</p>
					</div>
					<div className={(hideElements ? "hidden" : "") + " img-container"}>
						<img src="supplement_pill.png" />
					</div>
				</div>
				<div className="bg--white">
					{
						supplementsData.map((item, index) => {
							return (
								<div key={index} className="carousel-container">
									<div className="carousel-container_info">
										<Typography variant="h1">
											{item.supplementType}
										</Typography>
									</div>
									<Carousel data={item.data} settings={item.settings}>
									</Carousel>
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	);
}