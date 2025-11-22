"use client"
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addAssignment, updateAssignment} from "../reducer";
import { useSelector } from 'react-redux';
import { RootState} from '../../../../store';
interface Assignnment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  assignmentGroup?: string;
  displayGrade?: string;
  course: string;
}
export default function AssignmentEditorPage() {
  const { cid, aid } = useParams();
  const isNew = aid === "new";
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentReducer);
  const assignment = (assignments as Assignnment[]).find((a) => a._id === aid)
  const [title, setTitle] = useState(assignment?.title ?? "");
  const [description, setDescription] = useState(assignment?.description ?? "");
  const [points, setPoints] = useState(assignment?.points ?? 100);
  const [dueDate, setDueDate] = useState(assignment?.dueDate ?? "");
  const [availableFrom, setAvailableFrom] = useState(assignment?.availableFrom ?? "");
  const [availableUntil, setAvailableUntil] = useState(assignment?.availableUntil ?? "");
  const [assignmentGroup, setAssignmentGroup] = useState(assignment?.assignmentGroup ?? "ASSIGNMENT");
  const [displayGrade, setDisplayGrade] = useState(assignment?.displayGrade ?? "PERCENTAGE");
  const handleSave = () => {
    if (isNew) {
      const newAssignment: Assignnment = {
        _id: uuidv4(),
        title,
        description,
        points,
        dueDate,
        availableFrom,
        availableUntil,
        assignmentGroup,
        displayGrade,
        course: cid as string
      };
      dispatch(addAssignment(newAssignment));
    } else if (assignment) {
      const updatedAssignment: Assignnment = {
        ...assignment,
        title,
        description,
        points,
        dueDate,
        availableFrom,
        availableUntil,
        assignmentGroup,
        displayGrade,
      };
      dispatch(updateAssignment(updatedAssignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };
  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };
  useEffect(() => {
    if (assignment) {
      setTitle(assignment.title);
      setDescription(assignment.description);
      setPoints(assignment.points);
      setDueDate(assignment.dueDate);
      setAvailableFrom(assignment.availableFrom);
      setAvailableUntil(assignment.availableUntil);
      setAssignmentGroup(assignment.assignmentGroup ?? "ASSIGNMENT");
      setDisplayGrade(assignment.displayGrade ?? "PERCENTAGE");
    }
  }, [assignment]);
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            type="text"
            id="wd-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            id="wd-description"
            rows={3}
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
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
              onChange={(e) => setPoints(parseInt(e.target.value))}
              className="form-control"/>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <label htmlFor="wd-assignment-grp" className="form-label">Assignment Group</label>
            <select id="wd-assignment-grp" defaultValue="ASSIGNMENT" className="form-select"
              onChange={(e) => setAssignmentGroup(e.target.value)}>
              <option value="ASSIGNMENT">Assignment</option>
              <option value="QUIZ">Quiz</option>
              <option value="PROJECT">Project</option>
            </select>
          </div>
          <div className="col-12 col-md-4">
            <label htmlFor="wd-display-grd" className="form-label">Display Grade</label>
            <select id="wd-display-grd" defaultValue="PERCENTAGE" className="form-select"
              onChange={(e) => setDisplayGrade(e.target.value)}>
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
              <label htmlFor="wd-text-fields-due" className="form-label">Due Date</label>
              <input type="datetime-local" id="wd-text-fields-due" className="form-control" value={dueDate||""}
              onChange={(e) => {setDueDate(e.target.value); e.target.blur()}}/>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <label htmlFor="wd-text-fields-available-from" className="form-label">Available from</label>
              <input type="datetime-local" id="wd-text-fields-available-from" className="form-control" value={availableFrom||""} 
              onChange={(e) => {setAvailableFrom(e.target.value); e.target.blur()}}/>
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="wd-text-fields-until" className="form-label">Available Until</label>
              <input type="date" id="wd-text-fields-until" className="form-control" value={availableUntil||""}
               onChange={(e) => {setAvailableUntil(e.target.value); e.target.blur()}}/>
            </div>
          </div>
        </div>
        <hr />
         <div className="d-flex flex-column flex-md-row justify-content-end">
          <a className="btn btn-secondary me-md-2 mb-2 mb-md-0" onClick={handleCancel}>Cancel</a>
          <a className="btn btn-danger me-md-2 mb-2 mb-md-0" onClick={handleSave}>Save</a>
        </div>
        </form>
    </div>
  );
}
