import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import { useState } from 'react';
import { Task } from './components/Task';
import { v4 } from 'uuid';

export type TaskType = {
	id: string,
	description: string,
	checked?: boolean,
}

function App() {
	const [tasks, setTasks] = useState<TaskType[]>([]);

    function handleNewTask(description: string) {
		const newId = v4();

		const newTask = {
			id: newId,
			description: description,
			checked: false
		}
        setTasks([newTask, ...tasks]);
    }

	function handleDeleteTask(id: string) {
		const newTask = tasks.filter(task => task.id !== id)
		setTasks(newTask);
	}

	function handleCheckTask(id: string) {
		handleDeleteTask(id);
		setTasks(prevState => {
			const currentTask = tasks.find(task => task.id === id)!;
			currentTask.checked = !currentTask.checked;
			const newTask = currentTask.checked ? [{...currentTask, checked: false}, ...prevState] : [...prevState, { ...currentTask, checked: true}]
			return newTask;
		})
	}

	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<NewTask onSubmit={handleNewTask}/>
				<TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onCheckTask={handleCheckTask} />
			</div>
		</div>
	)
}

export default App
