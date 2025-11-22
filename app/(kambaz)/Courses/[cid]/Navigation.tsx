"use client"
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { ListGroupItem } from "react-bootstrap";
export default function CourseNavigation() {
  const pathName = usePathname();
  const params = useParams();
  const cid = params.cid as string;
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People", "Enrollments"];
  return (
    <div id="wd-courses-navigation"className="wd-list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} href={`/Courses/${cid}/${link}`} className="list-group-item active border-0">
          {link}
        </Link>
      ))}
    </div>
  );}