import React from 'react';
import { FaFileImport, FaFileExport, FaFilter, FaCog } from 'react-icons/fa';

export default function Grades() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <h2>Grades</h2>
        </div>
        <div className="col text-end">
          <button className="btn btn-primary me-2"><FaFileExport className="me-1" />Export</button>
          <button className="btn btn-primary me-2"><FaCog /></button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <div className="input-group">
            <select className="form-select">
              <option>Search Students</option>
            </select>
            <select className="form-select ms-2">
              <option>Search Assignments</option>
            </select>
            <button className="btn btn-primary ms-2"><FaFilter /></button>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <button className="btn btn-primary"><FaFileImport className="me-1" />Import</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>A1 SETUP<small> (out of 100)</small></th>
                  <th>A2 HTML<small> (out of 100)</small></th>
                  <th>A3 CSS<small> (out of 100)</small></th>
                  <th>A3BOOTSTRAP<small> (out of 100)</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text" className="form-control" defaultValue="John Doe" /></td>
                  <td><input type="text" className="form-control" defaultValue="90" /></td>
                  <td>85</td>
                  <td>95</td>
                  <td>88</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


