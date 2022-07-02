import styled from "styled-components";
import Image from "next/image";
import spinner from "../images/spinner.gif";

const Spinner = ({ width, height }) => {
	return (
		<>
			<ImageStyle>
				<Image
					priority={true}
					src={spinner}
					alt="Loading..."
					width={width}
					height={height}
					layout="fixed"
					className="spinner"
				/>
			</ImageStyle>
		</>
	);
};

const ImageStyle = styled.div`
	display: flex;
	justify-content: center;
`;

export default Spinner;
