"use client";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithArrays() {
    const API = `${HTTP_SERVER}/lab5/todos`;
    const [todo, setTodo] = useState({
        id: '1',
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2024-10-15",
        completed: false,
    });
    return (
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos </a><hr />
            <h4>Retrieving an Item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <FormControl id="wd-todo-id" defaultValue={todo.id} className="w-50"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <hr />
            <h3>Filtering Array Items</h3>
            <a id="wd-filter-todos" className="btn btn-primary"
                href={`${API}?completed=true`}>
                Get Completed Todos
            </a><hr />
            <h3>Creating New Todos</h3>
            <a id="wd-create-todo" className="btn btn-primary"
                href={`${API}/create`}>
                Create New Todo
            </a><hr />
            <h3>Deleting Todos</h3>
            <a id="wd-delete-todo-by-id" className="btn btn-primary float-end"
                href={`${API}/${todo.id}/delete`}>
                Delete Todo by ID {todo.id}
            </a>
            <FormControl id="wd-delete-todo-id" defaultValue={todo.id} className="w-50"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <hr />
            <h3>Updating an Item in an Array</h3>
            <a id="wd-update-todo-title" className="btn btn-primary float-end"
                href={`${API}/${todo.id}/update/${todo.title}/${todo.completed}/${todo.description}`}>
                Update Todo Properties
            </a>
            <FormControl id="wd-update-todo-title-input" defaultValue={todo.title} className="w-50 float-start"
                onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
            <FormControl id="wd-update-todo-id-input" defaultValue={todo.id} className="w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <label className="form-check-label" htmlFor="wd-module-completed">
            <input type = "checkbox" id="wd-update-todo-title-input" className="wd-50 float-start me-2"
                checked={todo.completed} onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
                Is Completed
            </label>
            <FormControl className="w-75" id="wd-module-score" type="text" defaultValue={todo.description}
                onChange={e => setTodo({...todo, description: e.target.value})} /> <hr />
        </div>
    );
}