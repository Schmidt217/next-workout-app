import ExerciseItem from "./ExerciseItem";
import ExerciseView from "./styles/ExerciseView";

/**
 * Render a list of exercises.
 */
const ExerciseList = (props) => {
	const { exercises, ...extraProps } = props;

	return (
		<ExerciseView>
			{exercises.map((exercise) => (
				<ExerciseItem key={exercise.id} exercise={exercise} {...extraProps} />
			))}
		</ExerciseView>
	);
};

export default ExerciseList;
