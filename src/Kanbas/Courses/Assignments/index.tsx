// src/Kanbas/Courses/Assignments/Assignments.tsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import { MdAssignment } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';
import { deleteAssignment } from './reducer';
import { RootState } from '../../store';
import { courses, assignments } from '../../Database';


export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignmentsData = useSelector((state: RootState) =>
    state.assignments.assignments.filter(assignment => assignment.course === cid)
  );
  const courseName = courses.find(course => course._id === cid)?.name;

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to remove the assignment?")) {
      dispatch(deleteAssignment(id));
    }
  };

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

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
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-icon"
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-outline-primary me-2">
            <FaPlus className="" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger float-end" onClick={handleAddAssignment}>
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-4" />
          <IoMdArrowDropdown />
          <h3 id="wd-assignments-title" className="mb-0">ASSIGNMENTS</h3>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-3">40% of Total</span>
          <button className="btn btn-primary btn-sm">
            <FaPlus />
          </button>
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-unstyled">
      {assignments
                .filter((assignment) => assignment.course === cid) // Filter assignments by course ID
                .map((assignment) => (
          <li key={assignment._id} className="wd-assignment-list-item border-start border-3 border-success ps-3 mb-2">
            <a
              href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              className="wd-assignment-link d-block fw-bold text-decoration-none">
              <BsGripVertical className="me-2 fs-4" />
              <MdAssignment className="me-2 fs-4" />
              {assignment.title}
            </a>
            <small className="text-muted ms-5">Due: {assignment.due} | Available: {assignment.available} | Points: {assignment.points}</small>
            <button className="btn btn-danger btn-sm float-end" onClick={() => handleDelete(assignment._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}




/*import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FaSearch,FaPlus } from 'react-icons/fa';
import { assignments } from '../../Database';
import { courses } from '../../Database';
import { BsGripVertical } from 'react-icons/bs';
import { MdAssignment } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Assignments() {
  const { cid } = useParams();
  const assignmentsData= assignments.filter((assignment) => assignment.course === cid);
  const courseName = courses.find(course => course._id === cid)?.name;
  const currentCourse = courses.find((course) => course._id === cid);
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
            placeholder="Search"
            aria-label="Search"
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
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-4" />
          <IoMdArrowDropdown />
          <h3 id="wd-assignments-title" className="mb-0">ASSIGNMENTS</h3>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-3">40% of Total</span>
          <button className="btn btn-primary btn-sm">
            <FaPlus />
          </button>
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-unstyled">
      {assignmentsData.map((assignment) => (
          <li key={assignment._id} className="wd-assignment-list-item border-start border-3 border-success ps-3 mb-2">
            <a
              href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              className="wd-assignment-link d-block fw-bold text-decoration-none">
              <BsGripVertical className="me-2 fs-4" />
              <MdAssignment className="me-2 fs-4" />

              {assignment.title}
            </a>
            <small className="text-muted ms-5">Due: {assignment.due} | Available: {assignment.available} | Points: {assignment.points}</small>
          </li>
        ))}
          </ul>
    </div>
  );}*/
