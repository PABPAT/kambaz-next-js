"use client";
import {useState} from "react";
import Link from "next/link";
import * as db from "../Database";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row, FormControl } from "react-bootstrap";
import {v4 as uuidv4} from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse} from "../Courses/reducer";
import { RootState } from "../store";
import { enrollCourse, unenrollCourse } from "../Courses/[cid]/Enrollments/reducer";
export default function Dashboard() {
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer) as { currentUser: { _id: string; role: string } | null };
    const { enrollments } = useSelector((state: RootState) => state.enrollmentReducer);
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/React.jpg", description: "New Description"
        });
    if (!currentUser) {
        return (
        <div>
            <h2>Please sign in to view your dashboard.</h2>
            <Link href="/Account/Signin" id="wd-signin-link"> Sign in </Link>
        </div>
        );
    }
    const visibleCourses = showAllCourses
        ? courses
        : courses.filter(course =>
            enrollments.some(enrollment =>
                enrollment.course === course._id && enrollment.user === currentUser._id
            )
        );
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h5>New Course
            <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={() => dispatch(addNewCourse(course))} > Add 
            </button>
            <button className="btn btn-warning float-end me-2"
                onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
                Update 
            </button>
            <button className="btn btn-danger float-end me-2" id ="wd-delete-course-click" onClick={(event)=> {
                  event.preventDefault();
                  dispatch(deleteCourse(course._id));
                }} >
                Delete
            </button>
        <br />
        </h5>
      <FormControl value={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as = "textarea" value={course.description} rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value }) } /><hr />
        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <button id="wd-dashboard-enrolled" className="btn btn-info float-end mb-3" onClick={() => setShowAllCourses(!showAllCourses)}>
            {showAllCourses ? "Show My Courses" : "Show All Courses"}
        </button>
                <div id="wd-dashboard-courses">
                    <Row xs={1} md={5} className="g-4">
                {visibleCourses.map((course) => {
                    const isEnrolled = enrollments.some(
                    (enrollment) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                    );
            return (
              <Col
                className="wd-dashboard-course"
                style={{ width: "300px" }}
                key={course._id}
              >
                <Card>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg
                      variant="top"
                      src={`${course.image}`}
                      width="100%"
                      height={160}
                    />
                    <CardBody>
                      <CardTitle className="wd-dashbaord-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-title overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </CardText>
                    <div className="d-flex justify-content-between mt-2">
                      <Button variant="primary" size="sm">Go</Button>
                      <button
                        className={`btn btn-sm ${
                          isEnrolled ? "btn-danger" : "btn-success"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          if (isEnrolled) {
                            dispatch(
                              unenrollCourse({
                                user: currentUser._id,
                                course: course._id,
                              })    
                            );
                          } else {
                            dispatch(
                              enrollCourse({
                                user: currentUser._id,
                                course: course._id,
                              })
                            );
                          }
                        }}
                      >
                        {isEnrolled ? "Unenroll" : "Enroll"}
                      </button>
                      {currentUser.role === "FACULTY" && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course._id));
                            }}
                            className="btn btn-danger btn-sm"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning btn-sm"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}