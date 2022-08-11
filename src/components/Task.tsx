import { Trash } from "phosphor-react";
import { TaskType } from "../App";
import styles from "./Task.module.css";

interface TaskProps {
    task: TaskType;
    onDeleteTask: (id: string) => void;
    onCheckTask: (id: string) => void;
}

export function Task({ task, onDeleteTask, onCheckTask }: TaskProps) {
    const isChecked = task.checked === true;
    
    function handleCheckTask() {
        return onCheckTask(task.id);
    }

    function handleDeleteTask() {
        return onDeleteTask(task.id);
    }

    return (
        <div className={styles.item}>
            <button onClick={handleCheckTask} className={isChecked ? styles.checked : styles.noCheck }></button>
            <span className={isChecked ? styles.checked : styles.noCheck }>{task.description}</span>
            <Trash onClick={handleDeleteTask} size={24} className={styles.delete} />
        </div>
    )
}