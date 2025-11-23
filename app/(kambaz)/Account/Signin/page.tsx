"use client";
import Link from "next/link";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import * as client from "../client";
export default function Signin() {
 const [credentials, setCredentials] = useState<any>({});
 const dispatch = useDispatch();
 const router = useRouter();
 const signin = async () => {
   const user = await client.signin(credentials);
   if (!user) {
    alert("Invalid username or password");
    return;
  }
   dispatch(setCurrentUser(user));
   router.push("/Dashboard");
 };
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="mb-2" placeholder="username" id="wd-username" autoComplete="off" />
      <FormControl defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             className="mb-2" placeholder="password" type="password" id="wd-password" autoComplete="off"/>
      <Button onClick={signin} id="wd-signin-btn" className="wd-signup-btn btn btn-primary mb-2 w-100" > Sign in </Button>
      <Link id="wd-signup-link" href="/Account/Signup"> Sign up </Link>
    </div>
  );
}
console.log("HTTP_SERVER =", process.env.NEXT_PUBLIC_HTTP_SERVER);