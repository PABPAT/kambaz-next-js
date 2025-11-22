"use client";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Creare a NodeJS server with ExpressJS",
        due: "2024-10-15",
        completed: false,
        score: 0,
    })
    const [module, setModule] = useState({
        id: 2,
        name: "Web Development",
        descripton: "Learn to build web applications using modern technologies",
        course: "Master of Science in Computer Science",
        due: "2024-12-20",
        completed: false,
        score: 0,
    })
    const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/assignment/title`}>
                Get Assignment Title
            </a> <hr />
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title </a>
            <FormControl className="w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />
            <h4>Retrieving Modules</h4>
            <a id="wd-retrieve-modules" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/module`}>
                Get Module
            </a><hr />
            <h4>Retrieving Module Name</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/module/name`}>
                Get Module Name
            </a> <hr />
            <h4>Modifying Module Name</h4>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name </a>
            <FormControl className="w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <hr />
            <h4>Modifying Module Score</h4>
            <a id="wd-update-module-score"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/score/${module.score}`}>
                Update Score </a>
            <FormControl className="w-75" id="wd-module-score"
                type="number" defaultValue={module.score} onChange={(e) =>
                    setModule({ ...module, score: parseFloat(e.target.value) })} />
            <hr />
            <h4>Modify the completion status of the Project</h4>
            <a id="wd-update-module-completed"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/completed/${module.completed}`}>
                Update Completed Status </a>
            <input
                className="form-check-input"
                type="checkbox"
                id="wd-module-completed"
                checked={module.completed}
                onChange={(e) =>
                    setModule({ ...module, completed: e.target.checked })
                }
            />
            <label className="form-check-label" htmlFor="wd-module-completed">
                Completed
            </label>
            <hr />
        </div>
    );
}