import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";

import styles from "./TaskList.module.css";

export function TaskList() {
    return (
        <div className={styles.tasks}>
            <header className={styles.info}>
                <span>Tarefas criadas <strong>0</strong> </span>
                <span>Concluídas <strong>0</strong> </span>
            </header>

            {/* <section className={styles.empty}>
                <ClipboardText size={56} color="#808080" />
                <div className={styles.text}>
                    <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </section> */}

            <section className={styles.taskList}>
                <Task checked={true} />
                <Task />
                <Task />
                <Task />
                <Task />
            </section>
        </div>
    )
}