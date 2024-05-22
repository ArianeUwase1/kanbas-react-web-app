import React from 'react';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className='row'>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/logo192.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/1234/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS 1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack Software Developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className=" btn btn-primary">Go</a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/NLP.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/1234/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS 6120 Natural Language Processing
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Advanced NLP Techniques
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className=" btn btn-primary">Go</a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/7100.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/1234/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CIVE 7100 Time Series
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Analysis of Time Series Data
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className=" btn btn-primary">Go</a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/5140.jpeg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/1234/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      ECON 5140 Applied Econometrics
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Econometric Methods
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className=" btn btn-primary">Go</a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/5262.jpeg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/1234/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      PPUA 5262 Big Data for Cities
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Utilizing Big Data in Urban Planning
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className=" btn btn-primary">Go</a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/7990.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/1234/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      DS 7990 Thesis
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Research Thesis
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className=" btn btn-primary">Go</a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/7305.jpeg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/1234/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      PHYS 7305 Statistical Physics
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Advanced Statistical Physics
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className=" btn btn-primary">Go</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
);}
