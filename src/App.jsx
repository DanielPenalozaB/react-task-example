import TaskList from "./components/Tasks/TaskList";
import TaskForm from "./components/Tasks/TaskForm";

export function App() {

	return (
		<div className="bg-zinc-900 h-screen">
			<div className="container mx-auto p-10">
				<TaskForm/>
				<TaskList/>
			</div>
		</div>
	);
}
