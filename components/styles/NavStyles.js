import styled from "styled-components";

const NavStyles = styled.nav`
	background-color: #5e7be6;
	margin: 0;
	padding: 0 0 0 1.5rem;
	display: flex;
	align-items: center;
	font-size: 1rem;
	width: 100%;
	box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
	@media (max-width: 700px) {
		position: absolute;
		top: 0;
		width: 175px;
		height: 100vh;
		transition: all 300ms ease-in-out;
		transform: translateX(-10%);
	}
	h1 {
		@media (max-width: 700px) {
			font-size: 16px;
			text-align: center;
		}
	}
	a,
	button {
		padding: 1rem 1.5rem;
		align-items: center;
		position: relative;
		text-transform: uppercase;
		float: right;
		font-weight: 500;
		font-size: 1em;
		background: none;
		border: 0;
		cursor: pointer;
		@media (max-width: 900px) {
			padding: 1rem, 0.5rem;
		}
		@media (max-width: 700px) {
			font-size: 14px;
			padding: 0 10px;
			text-align: center;
			display: block;
			transform: translateX(0%);
			transition: transform 0.4s ease-in;
		}
		&:after {
			height: 2px;
			background: #fcba03;
			content: "";
			width: 0;
			position: absolute;
			transform: translateX(-50%);
			transition: width 0.4s;
			transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
			left: 50%;
			margin-top: 2rem;
		}
		&:hover,
		&:focus {
			outline: none;
			text-decoration: none;
			&:after {
				width: calc(100% - 60px);
				@media (max-width: 700px) {
					width: calc(100% - 10px);
				}
			}
		}
	}
	button {
		position: absolute;
		right: 0;
		color: white;
	}
`;

export default NavStyles;
