import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </Link> 
          <p> Multiple Modules | Not available until Sep 23 at 12:00 am|
             Due date Sep 30 at 11:59 | 100 pts</p>
          </li>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/2345/Assignments/234"
             className="wd-assignment-link" >
            A2 - CSS
          </Link>
          <p> Multiple Modules | Not available until Oct 2 at 12:00 am|
             Due date Oct 7 at 11:59 | 100 pts</p>
        </li>
      </ul>
    </div>
);}