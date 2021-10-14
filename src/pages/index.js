import React ,{ useRef } from 'react';
import Contact from '../components/Contact';
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/Layout';
import * as styles from '../styles/main.module.css';
const index = () => {

  return (
      <Layout>
        <section className={styles.mainPage} id="home">
          <div className={styles.mainText}>
            <div className={styles.innerDiv}>
              <p>Hi, my name is </p>
              <h1>Srinivas Joshi</h1>
              <h1>I build things for the Web</h1>
            </div>
            <p>I’m a FrontEnd Developer specializing in building (and occasionally designing) exceptional web applications, and everything in between.</p>
            <a href="#contact"> Get In Touch</a>
          </div>
          <div className={styles.mainImg}>
            <StaticImage src="../images/main-page-img.svg" alt="developer-image"/>
          </div>
        </section>

        <section className={styles.about} id="about">
          <div className={styles.faceImg}>
            <StaticImage src="../images/DP.jpeg" alt="Display Image" />
          </div>
          <h2>About Me</h2>
          <div className={styles.aboutPara}>
            <p>I am a self-taught web developer. I play around with Javascript, creating web interfaces with accessibility in mind , prioritising UX . I have worked with technologies such as React.js , Angular, Firebase, Node.js to mention a few. I have interned at 3 startups. </p>
            <p>I read books of all kinds to gain perspective and I’m always curious. I love to play chess (noob). My other interesters include Personal Finance, Buisness, Tech in general. </p>
          </div>
        </section>

        
        <section className={styles.work} id="work">
          <h2>My Work</h2>
          <div className={styles.gridWork} >
            <div className={styles.project}>
              <div><StaticImage src="../images/1.png" alt="Project Three" className={styles.thumbNail} /> </div>
              <a href="https://binge12.netlify.app/">Binge</a>
              <p>Use of third-party API(OMDB) to get the data for movies and list them using CSS grid</p>
            </div>

            <div className={styles.project}>
              <div><StaticImage src="../images/2.png" alt="Project Three" className={styles.thumbNail} /> </div>
              <a href="https://proactive12.netlify.app/">ProActive</a>
              <p>A Web Application to improve your productivity.Includes todo list,music and timer. </p>
            </div>

            <div className={styles.project}>
              <div><StaticImage src="../images/3.png" alt="Project Three" className={styles.thumbNail} /></div>
              <a href="https://groomcafe.netlify.app/">Groom Cafe</a>
              <p>A website for a cake shop.Pick pastries of your choice.UI designed by me.</p>
            </div>

            <div className={styles.project}>
              <div><StaticImage src="../images/4.png" alt="Project Three" className={styles.thumbNail} /> </div>
              <a href="https://colorgame1212.netlify.app/"> RGB</a>
              <p>A Javascript game to test your RGB skills. Pick the card which represents the given code.</p>
            </div>
            
          </div>
        </section>
        <Contact />
      </Layout>
  );
}

export default index;
