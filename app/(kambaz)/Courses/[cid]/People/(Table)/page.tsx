"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { findUsersForCourse } from "../../../client";
import PeopleTable from "./PeopleTable";

export default function CoursePeople() {
    const { cid } = useParams();
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            if (cid) {
                const enrolledUsers = await findUsersForCourse(cid as string);
                setUsers(enrolledUsers);
            }
        } catch (error) {
            console.error("Error fetching enrolled users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [cid]);

    return (
        <div>
            <PeopleTable users={users} fetchUsers={fetchUsers} />
        </div>
    );
}