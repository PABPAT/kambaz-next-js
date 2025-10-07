import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>
        <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Steve</span>{" "}
            <span className="wd-last-name">Rogers</span></td>
        <td className="wd-login-id">001234562S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-02</td>
        <td className="wd-total-activity">20:15:10</td></tr>
        <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Bruce</span>{" "}
            <span className="wd-last-name">Banner</span></td>
        <td className="wd-login-id">001234563S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-03</td>
        <td className="wd-total-activity">15:45:22</td></tr>
        <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Natasha</span>{" "}
            <span className="wd-last-name">Romanoff</span></td>
        <td className="wd-login-id">001234564S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-04</td>
        <td className="wd-total-activity">12:30:45</td></tr>
        <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Clint
            </span>{" "}
            <span className="wd-last-name">Barton</span></td>
        <td className="wd-login-id">001234565S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-05</td>
        <td className="wd-total-activity">18:22:11</td></tr>
        <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Wanda</span>{" "}
            <span className="wd-last-name">Maximoff</span></td>
        <td className="wd-login-id">001234566S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-06</td>
        <td className="wd-total-activity">14:55:33</td></tr>
        <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Peter</span>{" "}
            <span className="wd-last-name">Parker</span></td>
        <td className="wd-login-id">001234567S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-07</td>
        <td className="wd-total-activity">11:40:29</td></tr>
        <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Stephen</span>{" "}
            <span className="wd-last-name">Strange</span></td>
        <td className="wd-login-id">001234568S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-08</td>
        <td className="wd-total-activity">16:18:47</td></tr>
        <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">TChalla</span>{" "}
            <span className="wd-last-name">Wakanda</span></td>
        <td className="wd-login-id">001234569S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-09</td>
        <td className="wd-total-activity">13:27:55</td></tr>    
    </tbody>
   </Table>
  </div> );}