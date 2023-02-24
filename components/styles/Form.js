import styled from "styled-components";

const Form = styled.form`
	display: "flex";
	flex-direction: "row";
	box-shadow: 3px 1px 5px 3px #dde;
	background: rgba(0, 0, 0, 0.02);
	border-radius: 6px;
	border: 5px solid white;
	padding: 20px;
	font-size: 1.5rem;
	line-height: 1.5;
	font-weight: 600;
	margin: 0px 100px 20px 100px;
	@media (max-width: 1000px) {
		margin: 0;
	}
	label {
		margin-bottom: 1rem;
	}
	input,
	textarea,
	select {
		width: 80%;
		max-width: 1500px;
		border-radius: 10px;
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid black;
		&:focus {
			outline: 0;
		}
	}
	input[type="submit"] {
		width: auto;
		background: #5e7be6;
		cursor: pointer;
		color: white;
		border: 0;
		border-radius: 10px;
		font-size: 1.25rem;
		font-weight: 400;
		margin: 0.5rem 1.2rem;
		padding: 0.45rem 1.2rem;
	}
	input[type="submit"]:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;

export default Form;
