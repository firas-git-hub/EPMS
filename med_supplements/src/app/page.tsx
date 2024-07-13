'use client';

import "./page.scss";
import { Button, IconButton, Typography } from "@mui/material";
import supplementsData from "../data/supplements.json";
import Carousel from "@/components/carousel/carousel";
import type { carouselProps } from "@/components/carousel/carousel";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import React from "react";
import ClickableCard from "@/components/clickableCard/clickableCard";

const mineralsData = supplementsData.minerals;
const aminoAcidsData = supplementsData.aminoAcids;
const vitaminsData = supplementsData.vitamins;


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

let vitaminsCarouselProps: carouselProps = {
	settings: carouselSettings,
	data: vitaminsData
}

let mineralsCarouselProps: carouselProps = {
	settings: carouselSettings,
	data: mineralsData
}

let aminoacidsCarouselProps: carouselProps = {
	settings: carouselSettings,
	data: aminoAcidsData
}

export default function Home() {
	return (
		<>
			<div className="page view">
				<div className="carousel-container">
					<div className="carousel-container_info">
						<Typography variant="h1">
							Vitamins
						</Typography>
					</div>
					<Carousel {...vitaminsCarouselProps}>
					</Carousel>
				</div>
				<div className="carousel-container">
					<div className="carousel-container_info">
						<Typography variant="h1">
							Amino Acids
						</Typography>
					</div>
					<Carousel {...aminoacidsCarouselProps}>
					</Carousel>
				</div>

				{/* <Carousel {...mineralsCarouselProps}>
				</Carousel> */}
			</div>
		</>
	);
}
