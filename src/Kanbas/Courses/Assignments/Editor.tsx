import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { assignments } from '../../Database';


export default function AssignmentEditor() {
  const { cid, assignid } = useParams();
  const assignment = assignments.find(assignment => assignment._id === assignid);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div id="wd-assignments-editor">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
            <input id="wd-name" className="form-control" value={assignment?.title} />
            <br />
            <label htmlFor="wd-description" className="form-label">Description</label>
            <textarea id="wd-description" className="form-control" rows={4} value={assignment?.description} />
            <br />
            <label htmlFor="wd-points" className="form-label">Points</label>
            <input id="wd-points" className="form-control" value={"100"} />
            <br />
            <div className="row">
              <div className="col">
                <label htmlFor="wd-assignment-group" className="form-label">Assignment Group:</label>
                <select id="wd-assignment-group" className="form-select" defaultValue="ASSIGNMENTS">
                  <option value="ASSIGNMENTS">Assignments</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As:</label>
                <select id="wd-display-grade-as" className="form-select" defaultValue="Percentage">
                  <option value="Percentage">Percentage</option>
                </select>
              </div>
            </div>
            <br />
            <label htmlFor="wd-submission-type" className="form-label">Submission Type:</label>
            <select id="wd-submission-type" className="form-select" defaultValue="Online">
              <option value="Online">Online</option>
            </select>
            <br />
            <h5 id="wd-online-entry-options">Online Entry Options</h5>
            <div className="form-check">
              <input type="checkbox" name="check-genre" id="wd-chkbox-Text-Entry" className="form-check-input" />
              <label htmlFor="wd-chkbox-Text-Entry" className="form-check-label">Text Entry</label><br />
              <input type="checkbox" name="check-genre" id="wd-chkbox-Website-URL" className="form-check-input" />
              <label htmlFor="wd-chkbox-Website-URL" className="form-check-label">Website URL</label><br />
              <input type="checkbox" name="check-genre" id="wd-chkbox-Media-Recordings" className="form-check-input" />
              <label htmlFor="wd-chkbox-Media-Recordings" className="form-check-label">Media Recordings</label><br />
              <input type="checkbox" name="check-genre" id="wd-chkbox-Student-Annotation" className="form-check-input" />
              <label htmlFor="wd-chkbox-Student-Annotation" className="form-check-label">Student Annotation</label><br />
              <input type="checkbox" name="check-genre" id="wd-chkbox-File-Uploads" className="form-check-input" />
              <label htmlFor="wd-chkbox-File-Uploads" className="form-check-label">File Uploads</label>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <label htmlFor="wd-assign-to" className="form-label">Assign To:</label>
                <input id="wd-assign-to" className="form-control" value="Text File" readOnly />
              </div>
              <div className="col">
                <label htmlFor="wd-due-date" className="form-label">Due Date:</label>
                <input type="date" id="wd-due-date" className="form-control" value={assignment?.due} readOnly />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <label htmlFor="wd-available-from" className="form-label">Available From:</label>
                <input type="date" id="wd-available-from" className="form-control" value={assignment?.available} readOnly />
              </div>
              <div className="col">
                <label htmlFor="wd-available-until" className="form-label">Available Until:</label>
                <input type="date" id="wd-available-until" className="form-control" value="2024-12-31" readOnly />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
              </div>
              <div className="col">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-primary">Save</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
