import Link from "next/link";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
export default function Assignments() {
  return (
    <div id="wd-assignment-list">
      <div id="wd-assignments" className="d-flex justify-content-between align-items-center">
          <div className="input-group" style={{width: 'auto'}}>
            <input placeholder="Search..."
                  id="wd-search-assignment"
                  className="form-control" />
          </div>
        <div className="text-end">
          <button id="wd-add-assignment-group" className="btn btn-secondary" style={{margin: 10}}>+ Group</button>
          <button id="wd-add-assignment" className="btn btn-danger">+ Assignment</button>
        </div>
      </div>
      <ListGroup>
      <ListGroupItem>
        <h3 id="wd-assignments-title">
          <div className="d-flex justify-content-between align-items-center" id="wd-assignment-groups">
            <div>
              <BsGripVertical /><strong>ASSIGNMENTS</strong>
            </div>
            <div className="text-end">
              <span className="bg-secondary rounded px-3 py-1" style={{margin:5}}>40% of Total</span>+<IoEllipsisVertical/>
            </div>
          </div>
        </h3>
      </ListGroupItem>
      <ListGroupItem className="wd-assignment-list-item">
      <div className="wd-assignment-link d-flex justify-content-between align-items-start">
        <div>
          <div className="d-flex align-items-center mb-1">
            <BsGripVertical className="me-2" />
            <FaRegEdit className="me-2 fs-5" />
            <Link href="/Courses/1234/Assignments/123" className="fw-bold text-decoration-none">
              A1
            </Link>
          </div>
          <div className="ps-4">
            <span className="text-danger">Multiple Modules</span> |{" "}
            <span className="fw-bold">Not available until</span> Sep 23 at 12:00 am |{" "}
            <span className="fw-bold">Due</span> Sep 30 at 11:59 | 100 pts
          </div>
        </div>
        <div className="d-flex align-items-start">
          <span className="me-2">
            <GreenCheckmark />
          </span>
          <IoEllipsisVertical />
        </div>
      </div>
    </ListGroupItem>
    <ListGroupItem className="wd-assignment-list-item">
      <div className="wd-assignment-link d-flex justify-content-between align-items-start">
        <div>
          <div className="d-flex align-items-center mb-1">
            <BsGripVertical className="me-2" />
            <FaRegEdit className="me-2 fs-5" />
            <Link href="/Courses/1234/Assignments/123" className="fw-bold text-decoration-none">
              A2
            </Link>
          </div>
          <div className="ps-4">
            <span className="text-danger">Multiple Modules</span> |{" "}
            <span className="fw-bold">Not available until</span> Sep 17 at 12:00 am |{" "}
            <span className="fw-bold">Due</span> Sep 27 at 11:59 | 100 pts
          </div>
        </div>
        <div className="d-flex align-items-start">
          <span className="me-2">
            <GreenCheckmark />
          </span>
          <IoEllipsisVertical />
        </div>
      </div>
    </ListGroupItem>
      </ListGroup>
    </div>
);}