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
            <p>I'm a FrontEnd Developer with a focus on creating (and occasionally designing) outstanding online applications and everything in between.</p>
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
            <p>I am a self-taught web developer. I play around with Javascript, creating web interfaces with accessibility in mind , prioritising UX . I've worked with technologies like React.js, Angular, and Node.js, to name a few. I interned at four startups and one multinational corporation. </p>
            <p>I read a variety of books to broaden my perspective and I'm naturally curious. My other interesters include Psychology, Business, Tech in general. </p>
          </div>
        </section>

        
        <section className={styles.work} id="work">
          <h2>My Work</h2>
          <div className={styles.gridWork} >
            <div className={styles.project}>
              <div><StaticImage src="../images/5.png" alt="Project One" className={styles.thumbNail} /> </div>
              <a href="https://sorting-visualiser1.netlify.app/">Sorting Visualiser</a>
              <p>This project aids in the visualisation of various sorting techniques like Bubble Sort, Merge Sort etc.</p>
            </div>
            <div className={styles.project}>
              <div><StaticImage src="../images/1.png" alt="Project Two" className={styles.thumbNail} /> </div>
              <a href="https://binge12.netlify.app/">Binge</a>
              <p>Use of third-party API(OMDB) to get the data for movies and list them using CSS grid</p>
            </div>

            <div className={styles.project}>
              <div><StaticImage src="../images/2.png" alt="Project Three" className={styles.thumbNail} /> </div>
              <a href="https://proactive12.netlify.app/">ProActive</a>
              <p>A Web Application to improve your productivity.Includes todo list,music and timer. </p>
            </div>

            {/* <div className={styles.project}>
              <div><StaticImage src="../images/3.png" alt="Project Three" className={styles.thumbNail} /></div>
              <a href="https://groomcafe.netlify.app/">Groom Cafe</a>
              <p>A website for a cake shop.Pick pastries of your choice.UI designed by me.</p>
            </div> */}

            {/* <div className={styles.project}>
              <div><StaticImage src="../images/4.png" alt="Project Three" className={styles.thumbNail} /> </div>
              <a href="https://colorgame1212.netlify.app/"> RGB</a>
              <p>A Javascript game to test your RGB skills. Pick the card which represents the given code.</p>
            </div> */}
            
          </div>
        </section>
        <Contact />
      </Layout>
  );
}

export default index;
