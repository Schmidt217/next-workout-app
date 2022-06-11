import { useState } from "react";
import { useRouter } from "next/router";
import Form from "./styles/Form";

const SearchExercise = ({ exercise }) => {
	const router = useRouter();
	const [text, setText] = useState(exercise ? exercise : "");

	const onChange = (e) => setText(e.target.value.toLowerCase());

	const onSubmit = (e) => {
		e.preventDefault();
		router.push(`/exercises/${text}`);
		setText("");
	};

	return (
		<div>
			<Form onSubmit={onSubmit}>
				<input
					type="text"
					name="text"
					placeholder="Search Exercises..."
					required
					value={text}
					onChange={onChange}
				/>
				<input type="submit" value="Search" />
			</Form>
		</div>
	);
};

export default SearchExercise;
