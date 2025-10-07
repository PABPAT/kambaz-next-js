import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl 
             placeholder="username"
             className="wd-username"/><br />
      <FormControl 
             placeholder="password" type="password"
             className="wd-password"/><br />
      <Link id="wd-signup-btn"
            href="Profile"
            className="btn btn-primary w-100 mb-2">
            Sign up </Link><br />
      <Link id="wd-signin-screen" href="/Account/Signin">Already have an account? Sign in</Link>
    </div> );}
