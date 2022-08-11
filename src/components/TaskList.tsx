import { ClipboardText } from "phosphor-react";
import { useState } from "react";
import { Task } from "./Task";

import styles from "./TaskList.module.css";
import { TaskType } from "../App";

interface TaskListProps {
    tasks: TaskType[];
    onDeleteTask: (id: string) => void;
    onCheckTask: (id: string) => void;
}

export function TaskList({tasks, onDeleteTask, onCheckTask}: TaskListProps) {
    const checkedTasks = tasks.filter(task => task.checked).length;
    const taskCount = tasks.length
    return (
        <div className={styles.tasks}>
            <header className={styles.info}>
                <span>Tarefas criadas <strong>{tasks.length}</strong> </span>
                <span>Concluídas <strong>{checkedTasks}</strong> </span>
            </header>

            {taskCount <= 0 ? (
                <section className={styles.empty}>
                    <ClipboardText size={56} color="#808080" />
                    <div className={styles.text}>
                        <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </section>
            ) : (
                <section className={styles.taskList}>
                    {tasks.map(task => {
                        return (
                            <Task key={task.id} task={task} onCheckTask={onCheckTask} onDeleteTask={onDeleteTask} />
                        )
                    })}
                </section>
            )}
        </div>
    )
}