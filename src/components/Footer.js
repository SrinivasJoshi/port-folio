import React from 'react';
import * as styles from '../styles/footer.module.css' 
import { StaticImage } from 'gatsby-plugin-image';
const Footer = () => {
    return (
        <footer className={styles.footer}>
           <div className={styles.socialGrp}>
               <a href="https://github.com/SrinivasJoshi"><StaticImage src="../images/github-icon.svg" className={styles.socialIcon} /> </a>
               <a href="https://twitter.com/JustSrinivas12"><StaticImage src="../images/twitter-icon.svg" className={styles.socialIcon} /> </a>
               <a href="https://www.linkedin.com/in/srinivas-joshi-a3abbb1b5"><StaticImage src="../images/linkedin-icon.svg" className={styles.socialIcon} /> </a>
           </div>

           <p>Copyright : 2021  Srinivas Joshi</p> 
           <p><a href="#home">Go to Top </a></p>
        </footer>
    );
}

export default Footer;
