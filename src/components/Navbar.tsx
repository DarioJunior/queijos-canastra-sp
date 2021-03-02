import styles from '../styles/components/Navbar.module.css';


export function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.bgWarning}>
                <div className={styles.warning}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    </svg>
                    <span>
                        Atendimento de segunda à sexta-feira, consulte os dias e horários das entregas!
                    </span>
                </div>
            </div>

            <div className={styles.bgNavbar}>
                <div className={styles.navbar}>
                    <div className={styles.imageLogo}>
                        <img className={styles.logo} src="images/logo.png" alt="Logo Queijos Canastra"/>
                    </div>
                    <div className={styles.link}>
                        <a href="#">Produtos</a>
                        <a href="#">Contato</a>
                    </div>
                </div>
            </div>
        </div>
    )
}