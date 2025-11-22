// app/kambaz/Dashboard/page.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as client from "../Courses/client";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import { RootState } from "../store";
import { setEnrollments, enrollCourse, unenrollCourse } from "../Courses/[cid]/Enrollments/reducer";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as { currentUser: { _id: string; role: string } | null };
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/React.jpg", description: "New Description"
  });
  const [showAllCourses, setShowAllCourses] = useState(false);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await client.fetchAllCourses();
      dispatch(setCourses(allCourses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    if (currentUser?._id) {
      try {
        const userEnrollments = await client.getUserEnrollments(currentUser._id);
        dispatch(setEnrollments(userEnrollments));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    })));
  };

  const handleEnroll = async (courseId: string) => {
    if (!currentUser?._id) return;
    try {
      await client.enrollUserInCourse(currentUser._id, courseId);
      dispatch(enrollCourse({ user: currentUser._id, course: courseId }));
      fetchEnrollments();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    if (!currentUser?._id) return;
    try {
      await client.unenrollUserFromCourse(currentUser._id, courseId);
      dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
      fetchEnrollments();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div>
        <h2>Please sign in to view your dashboard.</h2>
        <Link href="/Account/Signin" id="wd-signin-link"> Sign in </Link>
      </div>
    );
  }

  const enrolledCourseIds = enrollments
    .filter((e: any) => e.user === currentUser._id)
    .map((e: any) => e.course);

  const enrolledCourses = courses.filter((course: any) =>
    enrolledCourseIds.includes(course._id)
  );

  const unenrolledCourses = courses.filter((course: any) =>
    !enrolledCourseIds.includes(course._id)
  );

  const displayedCourses = showAllCourses ? courses : enrolledCourses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}> Add
            </button>
            <button className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse} id="wd-update-course-click">
              Update
            </button>
            <button className="btn btn-danger float-end me-2" id="wd-delete-course-click" onClick={(event) => {
              event.preventDefault();
              dispatch(deleteCourse(course._id));
            }} >
              Delete
            </button>
            <br />
          </h5>
          <FormControl value={course.name} className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl as="textarea" value={course.description} rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })} /><hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? `All Courses (${courses.length})` : `Enrolled Courses (${enrolledCourses.length})`}
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => {
            const isEnrolled = enrolledCourseIds.includes(course._id);
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
                      <div className="d-flex justify-content-between mt-2 flex-wrap gap-1">
                        <Button variant="primary" size="sm">Go</Button>

                        {currentUser.role === "STUDENT" && (
                          isEnrolled ? (
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                handleUnenroll(course._id);
                              }}
                              className="btn btn-danger btn-sm"
                            >
                              Unenroll
                            </button>
                          ) : (
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                handleEnroll(course._id);
                              }}
                              className="btn btn-success btn-sm"
                            >
                              Enroll
                            </button>
                          )
                        )}

                        {currentUser.role === "FACULTY" && (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                onDeleteCourse(course._id);
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