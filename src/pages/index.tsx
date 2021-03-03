import Content from "../components/Content";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar/>
            <Content />
            <Footer />
        </div>
    )
}
