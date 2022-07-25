import { PlusCircle } from "phosphor-react";

import styles from './NewTask.module.css';

export function NewTask() {
    return (
        <form className={styles.wrapper}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                <span>Criar</span>
                <PlusCircle size={16} />
            </button>
        </form>
    )
}