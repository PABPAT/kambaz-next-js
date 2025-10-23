"use client"
import Link from "next/link";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import * as db from "../../../Database";
import { useParams } from "next/navigation";
export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
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
          <button id="wd-add-assignment" className="btn btn-danger">
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
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroupItem 
              key={assignment._id} 
              className="d-flex justify-content-between align-items-start p-3"
            >
              <div className="d-flex align-items-start flex-grow-1">
                <BsGripVertical className="me-3 mt-1 text-muted" />
                <FaRegEdit className="me-3 mt-1 text-success" />
                <div className="flex-grow-1">
                  <Link 
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="fw-bold text-decoration-none text-dark"
                  >
                    {assignment._id} - {assignment.title}
                  </Link>
                  <div className="text-muted small mt-1">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <span className="fw-bold">Not available until</span> May 6 at 12:00am |{" "}
                    <span className="fw-bold">Due</span> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <GreenCheckmark />
                <IoEllipsisVertical className="ms-2" />
              </div>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}