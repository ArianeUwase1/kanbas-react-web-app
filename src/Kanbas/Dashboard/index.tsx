import React from 'react';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/logo192.png" width={200} alt=" React Js"  />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
              CS 1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack Software Developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/NLP.png" width={200} alt=" NLP" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6120/Home">
              CS 6120 Natural Language Processing
            </a>
            <p className="wd-dashboard-course-title">
              Advanced NLP Techniques
            </p>
            <a href="#/Kanbas/Courses/6120/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/7100.png" width={200} alt=" Time Series"  />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7100/Home">
              CIVE 7100 Time Series
            </a>
            <p className="wd-dashboard-course-title">
              Analysis of Time Series Data
            </p>
            <a href="#/Kanbas/Courses/7100/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/5140.jpeg" width={200} alt="Econometrics" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5140/Home">
              ECON 5140 Applied Econometrics
            </a>
            <p className="wd-dashboard-course-title">
              Econometric Methods
            </p>
            <a href="#/Kanbas/Courses/5140/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/5262.jpeg" width={200} alt=" Big Data" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5262/Home">
              PPUA 5262 Big Data for Cities
            </a>
            <p className="wd-dashboard-course-title">
              Utilizing Big Data in Urban Planning
            </p>
            <a href="#/Kanbas/Courses/5262/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/7990.png" width={200} alt="Thesis"  />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7990/Home">
              DS 7990 Thesis
            </a>
            <p className="wd-dashboard-course-title">
              Research Thesis
            </p>
            <a href="#/Kanbas/Courses/7990/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/7305.jpeg" width={200} alt="Statistical Physics" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7305/Home">
              PHYS 7305 Statistical Physics
            </a>
            <p className="wd-dashboard-course-title">
              Advanced Statistical Physics
            </p>
            <a href="#/Kanbas/Courses/7305/Home">Go</a>
          </div>
        </div>
      </div>
    </div>
  );
}
