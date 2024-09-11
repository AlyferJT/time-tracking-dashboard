import styled, { keyframes } from "styled-components";

import workCardIcon from "../assets/images/icon-work.svg";
import playCardIcon from "../assets/images/icon-play.svg";
import studyCardIcon from "../assets/images/icon-study.svg";
import exerciseCardIcon from "../assets/images/icon-exercise.svg";
import socialCardIcon from "../assets/images/icon-social.svg";
import selfCareCardIcon from "../assets/images/icon-self-care.svg";

import ellipsisIcon from "../assets/images/icon-ellipsis.svg";

export default function Card({ cardData, cardCustomInfo, dateFilter }) {
	const { title, timeframes } = cardData;
	const { color } = cardCustomInfo;

	function textToShow() {
		switch (dateFilter) {
			case "daily":
				return "Day";
			case "weekly":
				return "Week";
			case "monthly":
				return "Month";
		}
	}

	function selectIcon() {
		switch (title.toLowerCase()) {
			case "work":
				return workCardIcon;
			case "play":
				return playCardIcon;
			case "study":
				return studyCardIcon;
			case "exercise":
				return exerciseCardIcon;
			case "social":
				return socialCardIcon;
			case "self care":
				return selfCareCardIcon;
		}
	}

	return (
		<StyledDivCard style={{ backgroundColor: color }}>
			<div className='background-style'>
				<img src={selectIcon()} alt={`${title} card icon`} />
			</div>
			<div className='card-info'>
				<span className='card-title'>{title}</span>
				<button className='card-options'>
					<img src={ellipsisIcon} alt='ellipsis icon' />
				</button>
				<span className='card-time'>{timeframes[dateFilter].current}hrs</span>
				<p className='card-previous-time'>
					Last {textToShow()} - {timeframes[dateFilter].previous}hrs
				</p>
			</div>
		</StyledDivCard>
	);
}

const StyledDivCard = styled.div`
	width: 100%;
	border-radius: 1.6rem;
	overflow: hidden;

	display: grid;
	grid-template-rows: auto 1fr;

	box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.2);

	& .background-style {
		width: 100%;
		height: 4rem;
		position: relative;
		display: flex;
		justify-content: flex-end;
		overflow: hidden;

		& img {
			position: absolute;
			right: 2rem;
			top: 0;
			transform: translateY(-10%);
		}
	}

	.card-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.3rem;
		align-items: center;
		padding: 2.4rem 2rem;
		background-color: hsl(235, 46%, 20%);
		border-radius: 1.6rem;

		color: #fff;

		transition: all 0.2s;

		&:hover {
			background-color: hsl(246, 80%, 60%);
			cursor: pointer;
		}

		& .card-title {
			font-weight: 500;
		}

		& .card-options {
			padding: 0.4rem 0.2rem;
			background: none;
			border: none;

			justify-self: right;

			display: flex;
			align-items: center;
			justify-content: center;

			transition: filter 0.2s;

			&:hover {
				cursor: pointer;

				& img {
					filter: brightness(0) saturate(100%) invert(100%) sepia(100%)
						saturate(2%) hue-rotate(345deg) brightness(105%) contrast(101%);
				}
			}
		}

		& .card-time {
			font-size: 3.2rem;
			font-weight: 300;
		}

		& .card-previous-time {
			font-size: 1.4rem;
			color: hsl(236, 100%, 87%);
			justify-self: right;
		}
	}

	@media (min-width: 53rem) {
		.card-info {
			grid-template-columns: 1fr auto;
			& .card-time,
			& .card-previous-time {
				grid-column: span 2;
				justify-self: left;
			}

			& .card-time {
				margin-top: 1.6rem;
				font-size: 4rem;
			}
		}
	}
`;
