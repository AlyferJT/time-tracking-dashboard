import styled from "styled-components";

export default function ProfileCard({
	avatarImg,
	dateFilter,
	handleChangeDateFilter,
}) {
	return (
		<StyledDivProfileCard className='profile-card'>
			<div className='profile-info'>
				<img className='profile-img' src={avatarImg} alt='profile user photo' />
				<div>
					<span className='subtitle'>Report for</span>
					<p className='profile-name'>Jeremy Robson</p>
				</div>
			</div>
			<ul
				className='filter-btn-list'
				aria-description='list to filter cards by daily, weekly or monthly'
			>
				<li>
					<button
						onClick={() => handleChangeDateFilter("daily")}
						className={dateFilter === "daily" ? "active" : ""}
					>
						Daily
					</button>
				</li>
				<li>
					<button
						onClick={() => handleChangeDateFilter("weekly")}
						className={dateFilter === "weekly" ? "active" : ""}
					>
						Weekly
					</button>
				</li>
				<li>
					<button
						onClick={() => handleChangeDateFilter("monthly")}
						className={dateFilter === "monthly" ? "active" : ""}
					>
						Monthly
					</button>
				</li>
			</ul>
		</StyledDivProfileCard>
	);
}

const StyledDivProfileCard = styled.div`
	max-width: 100%;
	height: 20rem;
	background-color: hsl(235, 46%, 20%);
	border-radius: 1.6rem;
	box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.2);

	overflow: hidden;

	display: grid;
	grid-template-rows: auto 1fr;

	& .profile-info {
		display: flex;
		align-items: center;
		gap: 1.2rem;

		border-radius: 1.6rem;
		padding: 3rem 2.6rem;

		background-color: hsl(246, 80%, 60%);

		& .profile-img {
			width: 7rem;
			border: 0.35rem solid white;
			border-radius: 50%;
		}

		& .subtitle {
			font-size: 1.4rem;
			color: hsl(236, 100%, 87%);
		}

		& .profile-name {
			color: #fff;
			font-weight: 300;
			font-size: 2.4rem;
		}
	}

	& .filter-btn-list {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 0.5rem;

		list-style: none;
		& button {
			background: none;
			border: none;
			font-size: 1.8rem;
			color: hsl(235, 45%, 61%);

			transition: all 0.2s;

			&:hover {
				color: white;
				cursor: pointer;
			}

			&.active {
				color: #fff;
			}
		}
	}

	@media (min-width: 53rem) {
		grid-row: span 2;
		height: 100%;
		grid-template-rows: 1fr auto;

		& .profile-info {
			flex-direction: column;
			align-items: flex-start;
			gap: 2.5rem;

			& .profile-name {
				font-size: 3.2rem;
			}
		}

		& .filter-btn-list {
			padding: 2rem;
			flex-direction: column;
			align-items: flex-start;
			gap: 1.6rem;
		}
	}
`;
