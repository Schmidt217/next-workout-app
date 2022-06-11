import styled from "styled-components";
import Image from "next/image";
import spinner from "../images/spinner.gif";

const Spinner = () => {
	return (
		<>
			<ImageStyle>
				<Image
					priority={true}
					src={spinner}
					alt="Loading..."
					width={250}
					height={250}
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
