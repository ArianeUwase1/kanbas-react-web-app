export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
          The assignment is available online
          Submit a link to the landing page of your web 
          application running on Netlify. The landing 
          page should include the following: Your full 
          name and section links to each of the lab 
          assignments link to Kanbas application
          Links to all relevant source code repositories
          The Kanbas application should include a link 
          to navigate back to the landing page. 
        </textarea>
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
          </tbody>
        </table>
  
        <h5>Select one</h5>
        <label htmlFor="wd-assignment-group">Assignment Group:</label><br />
        <select id="wd-assignment-group">
          <option value="ASSIGNMENTS">Assignments</option>
        </select>
  
        <h5>Select one</h5>
        <label htmlFor="wd-display-grade-as">Display Grade As:</label><br />
        <select id="wd-display-grade-as">
          <option value="Percentage">Percentage</option>
        </select>
  
        <h5>Select one</h5>
        <label htmlFor="wd-submission-type">Submission Type:</label><br />
        <select id="wd-submission-type">
          <option value="Online">Online</option>
        </select>
  
        <h5 id="wd-online-entry-options">Online Entry Options</h5>
        <label>Online Entry Options:</label><br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-Text-Entry" />
        <label htmlFor="wd-chkbox-Text-Entry">Text Entry</label><br />
  
        <input type="checkbox" name="check-genre" id="wd-chkbox-Website-URL" />
        <label htmlFor="wd-chkbox-Website-URL">Website URL</label><br />
  
        <input type="checkbox" name="check-genre" id="wd-chkbox-Media-Recordings" />
        <label htmlFor="wd-chkbox-Media-Recordings">Media Recordings</label><br />
  
        <input type="checkbox" name="check-genre" id="wd-chkbox-Student-Annotation" />
        <label htmlFor="wd-chkbox-Student-Annotation">Student Annotation</label><br />
  
        <input type="checkbox" name="check-genre" id="wd-chkbox-File-Uploads" />
        <label htmlFor="wd-chkbox-File-Uploads">File Uploads</label>

        <h5>Assign</h5>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="wd-assign-to">Assign To:</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Text File" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-due-date">Due Date:</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" defaultValue="2024-12-31" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-available-from">Available From:</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" defaultValue="2024-01-01" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-available-until">Available Until:</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" defaultValue="2024-12-31" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}