import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'project', name: 'Project', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hello, I'm <strong>Kensuke Shibata</strong>
              <br />
              Full-Stack Web developer
            </h2>
            <p>I have made few things check it out.</p>
          </header>
          <footer>
            <Scroll type="id" element={'project'}>
              <a href="#project" className="button">
                Project
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="project" className="two">
        <div className="container">
          <header>
            <h2>Project</h2>
          </header>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  target="_blank"
                  href="https://github.com/keshibat/Fill_in_blank_quiz"
                  className="image fit"
                >
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Seinfeld Quiz</h3>
                </header>
              </article>
              <article className="item">
                <a
                  target="_blank"
                  href="https://github.com/keshibat/Logs-Analysis"
                  className="image fit"
                >
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Logs Analysis</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  target="_blank"
                  href="https://github.com/keshibat/Item_Catalog"
                  className="image fit"
                >
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>CRUD Clothing Item Calatog</h3>
                </header>
              </article>
              <article className="item">
                <a
                  target="_blank"
                  href="https://github.com/keshibat/dogtrain_react"
                  className="image fit"
                >
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Dog Train WebSite</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  target="_blank"
                  href="https://github.com/keshibat/LinuxServerConfiguration"
                  className="image fit"
                >
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Linux Server Configuration</h3>
                </header>
              </article>
              <article className="item">
                <a
                  target="_blank"
                  href="https://github.com/keshibat/Apollo_GraphQL-React-Dashboard"
                  className="image fit"
                >
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>GOFAR Dashboard</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>
          <a href="#about" className="image featured">
            <img src={pic8} alt="" />
          </a>
        </div>
        <h3>Work History</h3>
        <p>
          I started my career as a <span>Desktop Engineer</span> in{' '}
          <span>March 2014</span>s which allowed me to operate on Windows and
          Unix platforms. In <span>September 2014</span>, I was involved in a
          large-scale, high-demanding software release as a{' '}
          <span>QA tester</span> of the very first online charging system in
          Japan that now has 10 million subscribers with <span>NOKIA</span>.
          This online charging software system, developed by REDKNEE India and
          Germany and NOKIA Japan, needed testing for meeting quality
          requirements and KDDI Japan carrier’s design requirements. To do the
          testing from the Nokia’s side, I learned the testing know-how from the
          development engineer and successfully implemented my tasks. During
          that hands-on experience, I became very familiar with the{' '}
          <span>Unix operation, bash</span>, and Windows server. I investigated
          the problems based on the log and analyzed the packet using{' '}
          <span>Wireshark</span>. I also learned testing procedures from the
          German and Indian test engineers through which experience I became a
          better communicator, able to discuss roadblocks and alternative
          solutions with my colleagues on the <span>international team</span>.
          <br />
          In <span>August 2015</span>, when OCS went live, I was promoted to the
          role of <span>Level 2 Customer Support Engineer</span>. I was
          responsible for solving tickets from our customers in a timely manner.
          Being a Level 2 engineer in the environment where quality control
          standards were very high, taught me the best way to investigate
          customer problems, test and reproduce issues in the lab and apply
          fixed procedures on the online software which could potentially impact{' '}
          <span>10 million subscribers</span>. I have experienced firsthand the
          commercial system upgrade and realized how a live system should
          operate, being extremely careful executing some of the commands. I was
          also involved in developing the upgrade procedure documentation for
          the commercial use and the on-site upgrades.
        </p>
        <h3>Education</h3>
        <p>
          After high shool, I studied film production at{' '}
          <span>De Anza College</span> which located in the{' '}
          <span>Bay Area, California</span>. I completed Intro to Programming
          Nanodegree at <span>Udacity</span> in 2016 and completed{' '}
          <span>Full Stack Web Developer Nanodegree</span> in 2018. Currently, I
          started 6 months Programming BootCamp at <span>Coder Academy</span> in
          Sydney.
        </p>
        <h3>I love.</h3>
        <p>
          I love my spare spend my time in the <span>ocean</span> and get salty.
          I love to play <span>backgammon</span> with frinds while drinking a{' '}
          <span>mocha</span> at cafe. I had a blast time in{' '}
          <span>New Zealand</span> and <span>Australia</span> (working holiday)
          where I could <span>surf</span> one of the best surf spot in the
          world. I also like the part that constatnly try to improve my surf
          skills. Surfing is hard so as <span>Programming</span>. That makes me
          want to <span>keep inproving</span> day by day in my life time.
        </p>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>Have questions? Grab some coffee? Message me!!</p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
