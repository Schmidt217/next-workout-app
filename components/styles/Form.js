import styled from "styled-components";

const Form = styled.form`
	box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
	background: rgba(0, 0, 0, 0.02);
	border: 5px solid white;
	padding: 20px;
	font-size: 1.5rem;
	line-height: 1.5;
	font-weight: 600;
	label {
		display: block;
		margin-bottom: 1rem;
	}
	input,
	textarea,
	select {
		width: 100%;
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
		font-size: 2rem;
		font-weight: 400;
		margin: 0.5rem 1.2rem;
		padding: 0.5rem 1.2rem;
	}
	input[type="submit"]:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;

export default Form;
