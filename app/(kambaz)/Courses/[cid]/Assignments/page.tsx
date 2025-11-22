"use client";
import Link from "next/link";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignment  } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import * as client from "../../client";
import { useEffect, useState } from "react";
export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const onCreateAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { title: assignmentTitle, course: cid };
    const assignment = await client.createAssignmentForCourse(cid as string, newAssignment);
    dispatch(setAssignment([...assignments, assignment]));
  };
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignment(assignments));
  };
  const onDeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(setAssignment(assignments.filter((a: any) => a._id !== assignmentId)))
  };
  /*const onUpdateAssignment = async (assignment: any) => {
      await client.updateAssignment(assignment);
      const newAssignments = assignments.map((a: any) => a._id === assignment._id ? assignment : a);
      dispatch(setAssignment(newAssignments));
  };*/
  useEffect(() => {
    fetchAssignments();
  }, []);
  const { assignments } = useSelector((state: RootState) => state.assignmentReducer);

  const deleteAssignmentById = (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmDelete) {
      dispatch(deleteAssignment(id));
    } else {
      return;
    }
  }
  return (
    <div id="wd-assignment-list">
      <div id="wd-assignments" className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{width: '300px'}}>
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search"></i>
          </span>
          <input 
            placeholder="Search..." 
            id="wd-search-assignment" 
            className="form-control border-start-0" 
          />
        </div>
        <div className="text-end">
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger" onClick={onCreateAssignmentForCourse}>
            + Assignment
          </button>
        </div>
      </div>
      <ListGroup>
        <ListGroupItem className="bg-secondary">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2" />
              <strong>ASSIGNMENTS</strong>
            </div>
            <div className="d-flex align-items-center">
              <span className="border rounded px-3 py-1 me-2">40% of Total</span>
              <button className="btn btn-link p-0 text-dark">+</button>
              <IoEllipsisVertical className="ms-2" />
            </div>
          </div>
        </ListGroupItem>
        {assignments.map((assignment: any) => (
            <ListGroupItem 
              key={assignment._id} 
              className="d-flex justify-content-between align-items-start p-3"
            >
              <div className="d-flex align-items-start flex-grow-1">
                <BsGripVertical className="me-3 mt-1 text-muted" />
                  <div className="flex-grow-1 me-3">
                    <Link 
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="fw-bold text-decoration-none text-dark"
                    >
                      {assignment.title}
                    </Link>
                    <div className="text-muted small mt-1">
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <span className="fw-bold">Not available until</span> May 6 at 12:00am |{" "}
                      <span className="fw-bold">Due</span> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
              </div>
              <div className="d-flex align-items-center">
              <FaRegEdit className="me-3 mt-1 text-success"
                style={{ cursor: "pointer" }}
                onClick={() => router.push(`/Courses/${cid}/Assignments/${assignment._id}`)} />
                <FaTrash className="me-3 mt-1 text-danger"
                style = {{cursor: "pointer"}}
                onClick={(assignmentId) => onDeleteAssignment(assignment._id)}/>
              <div className="d-flex align-items-center">
                <GreenCheckmark />
                <IoEllipsisVertical className="ms-2" />
              </div>
            </div>
            </ListGroupItem>
          ))
          }
      </ListGroup>
    </div>
  );
}