import Search from "./Search.jsx"
import styled from "styled-components"

import SmallCard from "./SmallCard.jsx";

function Dashboard() {
	const DashboardContainer = styled.div `
		margin: 0px;
	`;

	const Header = styled.div `
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;

	const BidCard = styled.div`
		width: 600px;
		height: 360px;
		background-color: #1C1C1C;
		border-radius: 20px;
		padding: 10px;
		img, h2, h3, p {
			margin: 0;
			padding: 0;
		}
	`;

	const ItemDisplay = styled.div`
		width: 100%;
		overflow-x: auto;
		margin: 20px 0;
	`;

	const Button = styled.button`
		align-items: center;
        padding: 10px 20px;
		margin-right: 15px;
        border-radius: 50px;
        input {
            font-size: 16px;
            border: none;
            outline: none;
            background-color: transparent;
        }
        input::placeholder {
            color: #2A2A2A;
        }
        border: 1px solid #2A2A2A;
        background-color: #1C1C1C;
        max-width: 275px;
	`
	const BlueButton = styled(Button)`
	background-color: #0441D8;
  	`

	return (
		<DashboardContainer>
			<Header>
				<div>
					<h1 style={{margin: 0}}>Dashboard</h1>
					<p style={{margin: 0}}>Buy and Sell NFTs</p>
				</div>
				<Search/>
			</Header>
			<div>
				<BidCard>
					<div>
						<img src="" alt="Item" />
						<h3>Elon&Doge | Smart Toy</h3>
						<p>Auction ending in (Time)</p>
						<br />
						<p>Current Bid</p>
						<h2>0.0245 BTC</h2>
						<button>Place a bid</button>
						<button>View Art</button>
					</div>
				</BidCard>
				<div>
					<h2>Top Artist</h2>
				</div>
			</div>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div>
					<BlueButton>Collectible</BlueButton>
					<Button>Arts</Button>
					<Button>Utility</Button>
					<Button>SPorts</Button>
					<Button>Gaming</Button>
				</div>
				<a href="#">View All →</a>
			</div>
			<ItemDisplay>
				<div style={{display: "flex",width: "fit-content"}}>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
					<SmallCard></SmallCard>
				</div>
			</ItemDisplay>
		</DashboardContainer>
	)
}

export default Dashboard
