import React from 'react';
import * as styles from '../../styles/blog.module.css';
import Navbar from '../../components/Navbar';
import Layout from '../../components/Layout';

const index = () => {
    return (
       <Layout>
           <section className={styles.blog}>
               <h2>My Blog</h2>
               <div className={styles.blogGrid}>
                   <div className={styles.blogPost}>
                       <div></div>
                       <h3>Why You should read "Breathe"</h3>
                   </div>
                   <div className={styles.blogPost}>
                        <div></div>
                       <h3>Why You should read "Breathe"</h3>
                   </div>
                   <div className={styles.blogPost}>
                        <div></div>
                       <h3>Why You should read "Breathe"</h3>
                   </div>
                   <div className={styles.blogPost}>
                        <div></div>
                       <h3>Why You should read "Breathe"</h3>
                   </div>
                   <div className={styles.blogPost}>
                        <div></div>
                       <h3>Why You should read "Breathe"</h3>
                   </div>
                   <div className={styles.blogPost}>
                        <div></div>
                       <h3>Why You should read "Breathe"</h3>
                   </div>
               </div>
           </section>
           </Layout>
    );
}

export default index;
