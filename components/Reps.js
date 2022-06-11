import styled from "styled-components";

const Reps = ({ sets, reps, setSets, setReps }) => {
	return (
		<form>
			<div>
				<Label htmlFor="sets">Sets</Label>
				<input
					style={{ width: "40px" }}
					type="number"
					name="sets"
					value={sets}
					onChange={(input) => setSets(input.target.value)}
				/>
			</div>
			<div>
				<Label htmlFor="reps">Reps</Label>
				<input
					style={{ width: "40px" }}
					type="number"
					name="reps"
					value={reps}
					onChange={(input) => setReps(input.target.value)}
				/>
			</div>
		</form>
	);
};

const Label = styled.label`
	display: inline-block;
	width: 40px;
`;

export default Reps;
