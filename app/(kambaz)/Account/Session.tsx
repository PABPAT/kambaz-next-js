import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();
    const fetchProfile = async () => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        try {
            const currentUser = await client.profile();
            clearTimeout(timeoutId);
            dispatch(setCurrentUser(currentUser));
        } catch (err: any) {
            clearTimeout(timeoutId);
            if (err.code === 'ECONNABORTED' || err.name === 'AbortError') {
                console.log("Backend is cold starting, allowing user to proceed");
            } else if (err.response?.status !== 401) {
                console.error("Unexpected profile error: ", err);
            }
            dispatch(setCurrentUser(null));
        }
        setPending(false);
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    if (pending) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Checking session... (Backend may be waking up)</p>
            </div>
        );
    }
    return children;
};