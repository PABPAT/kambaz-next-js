  "use client";
  import { useState } from "react";
  import Link from "next/link";
  import { FormControl } from "react-bootstrap";
  import * as db from "../../Database";
  import { useRouter } from "next/navigation";
  export default function Signup() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const signup = () => {
      if (!username || !password) {
        alert("Please enter both username and password");
        return;
      }
    const existingUser = db.users.find((u: any) => u.username === username);
      if (existingUser) {
        alert("Username already exists");
        return;
      }
    const newUser = {
      _id: (db.users.length + 1).toString(),
      username,
      password,
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      role: "STUDENT",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity:""
    };
    db.users.push(newUser);
    alert("Signup successful! Please sign in.");
    router.push("/Account/Signin");
  }
    return (
      <div id="wd-signup-screen">
        <h1>Sign up</h1>
        <FormControl 
              placeholder="username"
              className="wd-username"
              value={username}
              onChange = {(e) => setUsername(e.target.value)}/> 
              <br />
        <FormControl 
              placeholder="password" type="password"
              className="wd-password"
              value = {password}
              onChange={(e) => setPassword(e.target.value)}/><br />
        <button id="wd-signup-btn"
              className="btn btn-primary w-100 mb-2"
              onClick={signup}>
              Sign up </button><br />
        <Link id="wd-signin-screen" href="/Account/Signin">Already have an account? Sign in</Link>
      </div> );
    }

