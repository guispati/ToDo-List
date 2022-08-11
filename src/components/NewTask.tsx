import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from './NewTask.module.css';

interface NewTaskProps {
    onSubmit: (task: string) => void;
}

export function NewTask({onSubmit}: NewTaskProps) {
    const [newTaskText, setNewTaskText] = useState('');

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function handleNewTask(event: FormEvent) {
        event.preventDefault();

        onSubmit(newTaskText);
        setNewTaskText('');
    }

    return (
        <form className={styles.wrapper} onSubmit={handleNewTask}>
            <input name="task" type="text" placeholder="Adicione uma nova tarefa" value={newTaskText} onChange={handleNewTaskChange} onInvalid={handleNewTaskInvalid} required />
            <button type="submit">
                <span>Criar</span>
                <PlusCircle size={16} />
            </button>
        </form>
    )
}