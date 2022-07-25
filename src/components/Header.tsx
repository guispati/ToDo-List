import styles from './Header.module.css';

import logo from '../assets/Logo.svg';


export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logotipo do ToDo List" />
        </header>
    )
}