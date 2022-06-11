import React from "react";
import styled from "styled-components";

function Modal(props) {
	return (
		<ModalWrapper>
			<ModalCard>
				<div>{props.children}</div>
			</ModalCard>
			<Background />
		</ModalWrapper>
	);
}

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalCard = styled.div`
	position: absolute;
	margin: 0 auto;
	max-width: 1600px;
	min-width: 120px;
	z-index: 10;
	margin-bottom: 100px;
	background: white;
	padding: 15px;
	border-radius: 5px;
	color: black;
`;

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.5;
	backdrop-filter: blur(100%);
`;

export default Modal;
