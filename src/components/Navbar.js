import React ,{useState} from 'react';
import * as styles from '../styles/navbar.module.css';

const Navbar = () => {
    const [menu, setMenu] = useState(true);
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftSide}>
                <img src="/logo.svg" alt="Logo Img" />
            </div>
            <div className={menu ? styles.noMenu : styles.rightSide}>
                {/* <li><a href="#home">Home</a></li> */}
                <li><a href="#about" >About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li> <a href="/blog">Blog</a></li>    */}
            </div>
            
            {menu ? <img src="/menu.svg" alt="menu" onClick={() => setMenu(!menu)} className={styles.menuBtn} />: <img src="/cancel.svg" alt="cancel" onClick={() => setMenu(!menu)} className={styles.menuBtn} />}
        </nav>
    );
}

export default Navbar;
