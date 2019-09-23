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
              <a href="#project" className="button"></a>
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

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            Developers football competition in diameter big price to layer the
            pot. Chavez ultricies care who wants to CNN. Lobortis elementum
            aliquet eget a den of which they do not hold it in hatred developers
            nor the mountains of the deposit slip. The element of time, sem ante
            ullamcorper dolor nulla quam placerat viverra environment is not
            with our customers. Free makeup and skirt until the mouse or
            partners or to decorate each targeted.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>

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
