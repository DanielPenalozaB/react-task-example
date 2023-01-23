import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskList() {
	const { tasks } = useContext(TaskContext);

	if (tasks.length === 0) {
		return <h1 className="text-white text-4xl font-bold text-center pt-5">There's no tasks yet</h1>;
	}

	return (
		<div className="grid grid-cols-4 gap-2">
			{tasks.map((data) => (
				<TaskCard key={data.id} data={data} />
			))}
		</div>
	);
}

export default TaskList;