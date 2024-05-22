import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
  
export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ maxWidth: '400px' }}>
          <span className="input-group-text" id="search-icon">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search "
            aria-label="Search "
            aria-describedby="search-icon"
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-outline-primary me-2">
            <FaPlus className="" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger float-end">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>
      <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center mb-3">
        ASSIGNMENTS 40% of Total
        <button className="btn btn-primary btn-sm">
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="list-unstyled">
        <li className="wd-assignment-list-item border-start border-3 border-success ps-3 mb-2">
          <a className="wd-assignment-link d-block fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
          <small className="text-muted">Due: June 03 at 11:59pm | Points: 100</small>
        </li>
        <li className="wd-assignment-list-item border-start border-3 border-success ps-3 mb-2">
          <a className="wd-assignment-link d-block fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/124">
            A2 - CSS + BOOTSTRAP
          </a>
          <small className="text-muted">Due: June 10 at 11:59pm | Points: 100</small>
        </li>
        <li className="wd-assignment-list-item border-start border-3 border-success ps-3 mb-2">
          <a className="wd-assignment-link d-block fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/125">
            A3 - JAVASCRIPT + REACT
          </a>
          <small className="text-muted">Due: June 17 at 11:59pm | Points: 100</small>
        </li>
      </ul>
    </div>
  );}


