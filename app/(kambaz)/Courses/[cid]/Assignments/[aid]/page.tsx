import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditorPage() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            type="text"
            id="wd-name"
            defaultValue="A1 - ENV + HTML"
            className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            id="wd-description"
            rows={3}
            defaultValue="The assignment is available online Submit a link to the landing page of"
            className="form-control">
          </textarea>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <label htmlFor="wd-points" className="form-label">Points</label>
            <input
              type="number"
              id="wd-points"
              defaultValue={100}
              className="form-control"/>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <label htmlFor="wd-assignment-grp" className="form-label">Assignment Group</label>
            <select id="wd-assignment-grp" defaultValue="ASSIGNMENT" className="form-select">
              <option value="ASSIGNMENT">Assignment</option>
              <option value="QUIZ">Quiz</option>
              <option value="PROJECT">Project</option>
            </select>
          </div>
          <div className="col-12 col-md-4">
            <label htmlFor="wd-display-grd" className="form-label">Display Grade</label>
            <select id="wd-display-grd" defaultValue="PERCENTAGE" className="form-select">
              <option value="PERCENTAGE">Percentage</option>
              <option value="TOTAL MARKS">Total Marks</option>
              <option value="GPA">GPA</option>
            </select>
          </div>
        </div>
        <label className="mt-3 d-block">Submission Type</label>
        <div className="mb-3 border p-3 rounded">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="form-select mb-3">
            <option value="ONLINE">Online</option>
            <option value="OFFLINE">Offline</option>
          </select>
          <label className="form-label mb-2">Online Entry Options</label>
          <div className="form-check">
            <input type="checkbox" id="wd-chkbox-text_entry" className="form-check-input" />
            <label htmlFor="wd-chkbox-text_entry" className="form-check-label">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-chkbox-website_url" className="form-check-input" />
            <label htmlFor="wd-chkbox-website_url" className="form-check-label">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-chkbox-media_recordings" className="form-check-input" />
            <label htmlFor="wd-chkbox-media_recordings" className="form-check-label">Media Recordings</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-chkbox-student_annotation" className="form-check-input" />
            <label htmlFor="wd-chkbox-student_annotation" className="form-check-label">Student Annotation</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-chkbox-file_uploads" className="form-check-input" />
            <label htmlFor="wd-chkbox-file_uploads" className="form-check-label">File Uploads</label>
          </div>
        </div>
        <label className="mt-3 d-block">Assign</label>
        <div className="mb-3 border p-3 rounded">
          <div className="mb-3">
            <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
            <input type="text" id="wd-assign-to" placeholder="Everyone" className="form-control" />
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <label htmlFor="wd-text-fields-due" className="form-label">Due</label>
              <input type="date" id="wd-text-fields-due" className="form-control" />
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <label htmlFor="wd-text-fields-available-from" className="form-label">Available from</label>
              <input type="date" id="wd-text-fields-available-from" className="form-control" />
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="wd-text-fields-until" className="form-label">Until</label>
              <input type="date" id="wd-text-fields-until" className="form-control" />
            </div>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="d-flex flex-column flex-md-row justify-content-end">
          <button type="button" className="btn btn-secondary me-md-2 mb-2 mb-md-0">Cancel</button>
          <button type="submit" className="btn btn-danger">Save</button>
        </div>
      </form>
    </div>
  );
}
