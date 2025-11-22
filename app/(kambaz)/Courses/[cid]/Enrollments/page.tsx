// app/kambaz/courses/[cid]/Enrollments/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem, FormControl, Button, Alert } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import {
    getUserEnrollments,
    enrollUserInCourse,
    unenrollUserFromCourse,
    fetchAllCourses
} from "../../client";
import { setEnrollments, enrollCourse, unenrollCourse } from "./reducer";

export default function Enrollments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [availableCourses, setAvailableCourses] = useState<any[]>([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadData();
    }, [currentUser]);

    const loadData = async () => {
        try {
            setLoading(true);
            setError(null);

            // Load courses
            const courses = await fetchAllCourses();
            setAvailableCourses(courses);

            // Load enrollments if user is logged in
            if (currentUser?._id) {
                const data = await getUserEnrollments(currentUser._id);
                dispatch(setEnrollments(data));
            }
        } catch (err) {
            setError("Failed to load data");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleEnroll = async () => {
        if (!selectedCourse) {
            setError("Please select a course");
            return;
        }

        if (!currentUser?._id) {
            setError("Please sign in to enroll in courses");
            return;
        }

        try {
            setError(null);
            await enrollUserInCourse(currentUser._id, selectedCourse);
            dispatch(enrollCourse({ user: currentUser._id, course: selectedCourse }));
            setSelectedCourse("");
            loadData();
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to enroll in course");
        }
    };

    const handleUnenroll = async (courseId: string) => {
        if (!window.confirm("Are you sure you want to unenroll from this course?")) {
            return;
        }

        if (!currentUser?._id) {
            setError("Please sign in to unenroll from courses");
            return;
        }

        try {
            setError(null);
            await unenrollUserFromCourse(currentUser._id, courseId);
            dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
            loadData();
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to unenroll from course");
        }
    };

    const enrolledCourseIds = enrollments
        .filter((e: any) => e.user === currentUser?._id)
        .map((e: any) => e.course);

    const coursesToEnroll = availableCourses.filter(
        (c) => !enrolledCourseIds.includes(c._id)
    );

    const getCourseName = (courseId: string) => {
        const course = availableCourses.find((c) => c._id === courseId);
        return course ? course.name : courseId;
    };

    const getCourseNumber = (courseId: string) => {
        const course = availableCourses.find((c) => c._id === courseId);
        return course ? course.number : "";
    };

    if (loading) {
        return <div className="p-4">Loading enrollments...</div>;
    }

    if (!currentUser) {
        return (
            <div className="p-4">
                <h3>My Enrollments</h3>
                <Alert variant="info">Please sign in to view and manage your enrollments.</Alert>
            </div>
        );
    }

    return (
        <div id="wd-enrollments">
            {error && (
                <Alert variant="danger" dismissible onClose={() => setError(null)}>
                    {error}
                </Alert>
            )}

            <div className="mb-5 p-3 bg-secondary rounded">
                <h5 className="mb-3">Enroll in a Course</h5>
                <div className="d-flex gap-2">
                    <FormControl
                        as="select"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        disabled={coursesToEnroll.length === 0}
                        className="flex-fill"
                    >
                        <option value="">
                            {coursesToEnroll.length === 0
                                ? "No courses available"
                                : "Select a course..."}
                        </option>
                        {coursesToEnroll.map((course) => (
                            <option key={course._id} value={course._id}>
                                {course.number} - {course.name}
                            </option>
                        ))}
                    </FormControl>
                    <Button
                        variant="success"
                        onClick={handleEnroll}
                        disabled={!selectedCourse || coursesToEnroll.length === 0}
                    >
                        Enroll
                    </Button>
                </div>
            </div>

            <h5 className="mb-3">Enrolled Courses ({enrolledCourseIds.length})</h5>

            {enrolledCourseIds.length === 0 ? (
                <Alert variant="info">You are not enrolled in any courses yet.</Alert>
            ) : (
                <ListGroup id="wd-enrolled-courses" className="rounded-0">
                    {enrollments
                        .filter((e: any) => e.user === currentUser._id)
                        .map((enrollment: any) => (
                            <ListGroupItem key={enrollment._id} className="p-3 border-gray d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <div>
                                        <div className="fw-bold">{getCourseName(enrollment.course)}</div>
                                        <small className="text-muted">
                                            {getCourseNumber(enrollment.course)} - {enrollment.course}
                                        </small>
                                    </div>
                                </div>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleUnenroll(enrollment.course)}
                                >
                                    Unenroll
                                </Button>
                            </ListGroupItem>
                        ))}
                </ListGroup>
            )}
        </div>
    );
}