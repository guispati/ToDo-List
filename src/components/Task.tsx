import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
    checked?: boolean;
}

export function Task({ checked }: TaskProps) {
    // console.log(checked);
    const isChecked = checked === true;
    return (
        <div className={styles.item}>
            <button className={isChecked ? styles.checked : styles.noCheck }></button>
            <span className={isChecked ? styles.checked : styles.noCheck }>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            <Trash size={24} className={styles.delete} />
        </div>
    )
}