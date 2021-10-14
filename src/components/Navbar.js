import React ,{useState} from 'react';
import * as styles from '../styles/navbar.module.css';
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
    const [menu, setMenu] = useState(true);
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftSide}>
                <StaticImage src="../images/logo.svg" alt="Logo Img" />
            </div>
            <div className={menu ? styles.noMenu : styles.rightSide}>
                {/* <li><a href="#home">Home</a></li> */}
                <li><a href="#about" >About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li> <a href="/blog">Blog</a></li>    */}
            </div>
            
            {menu ? <StaticImage src="../images/menu-ic.svg" alt="menu" 
            onClick={() => setMenu(!menu)} className={styles.menuBtn} />
            : <StaticImage src="../images/cancel-ic.svg" alt="cancel" 
            onClick={() => setMenu(!menu)} className={styles.menuBtn} />}
        </nav>
    );
}

export default Navbar;
