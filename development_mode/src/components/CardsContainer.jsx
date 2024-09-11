import styled from "styled-components";
import Card from "./Card";
import ProfileCard from "./ProfileCard";

import profileAvatar from "../assets/images/image-jeremy.png";
import cardsData from "../utils/data.json";
import { useState } from "react";

const cardCustomInfoList = {
	work: {
		color: "hsl(15, 100%, 70%)",
	},
	play: {
		color: "hsl(195, 74%, 62%)",
	},
	study: {
		color: "hsl(348, 100%, 68%)",
	},
	exercise: {
		color: "hsl(145, 58%, 55%)",
	},
	social: {
		color: "hsl(264, 64%, 52%)",
	},
	selfCare: {
		color: "hsl(43, 84%, 65%)",
	},
};

function filterTitleOnList(title) {
	const returnedKey = Object.keys(cardCustomInfoList).filter(
		(key) => key.toLowerCase() === title.replace(/\s/g, "").toLowerCase()
	);

	return cardCustomInfoList[returnedKey];
}

export default function CardsContainer() {
	const [dateFilter, setDateFilter] = useState("weekly");

	function handleChangeDateFilter(filterValue) {
		setDateFilter(filterValue);
	}

	return (
		<StyleSectionCards className='cards'>
			<ProfileCard
				dateFilter={dateFilter}
				classes='profile-card'
				avatarImg={profileAvatar}
				handleChangeDateFilter={handleChangeDateFilter}
			/>
			{cardsData.map((card) => (
				<Card
					key={card.title}
					cardData={card}
					cardCustomInfo={filterTitleOnList(card.title)}
					dateFilter={dateFilter}
				/>
			))}
		</StyleSectionCards>
	);
}

const StyleSectionCards = styled.section`
	max-width: 37.5rem;

	padding: 6.4rem 2.4rem;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 1;
	gap: 2.4rem;

	@media (min-width: 53rem) {
		max-width: 100rem;
		grid-template-columns: repeat(4, 1fr);
	}
`;
