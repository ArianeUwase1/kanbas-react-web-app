export default function AssignmentEditor() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div id="wd-assignments-editor">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
            <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
            <br />
            <label htmlFor="wd-description" className="form-label">Description</label>
            <textarea id="wd-description" className="form-control" rows={4}>The assignment is available online Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section links to each of the lab assignments link to Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.</textarea>
            <br />
            <label htmlFor="wd-points" className="form-label">Points</label>
            <input id="wd-points" className="form-control" value="100" />
            <br />
            <div className="row">
              <div className="col">
                <label htmlFor="wd-assignment-group" className="form-label">Assignment Group:</label>
                <select id="wd-assignment-group" className="form-select">
                  <option value="ASSIGNMENTS">Assignments</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As:</label>
                <select id="wd-display-grade-as" className="form-select">
                  <option value="Percentage">Percentage</option>
                </select>
              </div>
            </div>
            <br />
            <label htmlFor="wd-submission-type" className="form-label">Submission Type:</label>
            <select id="wd-submission-type" className="form-select">
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
                <input id="wd-assign-to" className="form-control" value="Text File" />
              </div>
              <div className="col">
                <label htmlFor="wd-due-date" className="form-label">Due Date:</label>
                <input type="date" id="wd-due-date" className="form-control" value="2024-12-31" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <label htmlFor="wd-available-from" className="form-label">Available From:</label>
                <input type="date" id="wd-available-from" className="form-control" value="2024-01-01" />
              </div>
              <div className="col">
                <label htmlFor="wd-available-until" className="form-label">Available Until:</label>
                <input type="date" id="wd-available-until" className="form-control" value="2024-12-31" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <button className="btn btn-secondary">Cancel</button>
              </div>
              <div className="col">
                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
