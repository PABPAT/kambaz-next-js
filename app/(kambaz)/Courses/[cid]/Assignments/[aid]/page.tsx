export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
            </td>
        </tr>
        <tr>
            <td>
            <label  htmlFor="wd-assignment-grp"> Assignment Group </label>
            <select id="wd-assignment-grp">
                <option value="ASSIGNMENT">Assignment</option>
                <option value="QUIZ">Quiz</option>
                <option value="PROJECT">Project</option>
            </select>
            </td>
        </tr>
        <tr>
            <td>
            <label  htmlFor="wd-display-grd"> Display Grade </label>
            <select id="wd-display-grd">
                <option value="PERCENTAGE">Percentage</option>
                <option value="TOTAL MARKS">Total Marks</option>
                <option value="GPA">GPA</option>
            </select>
            </td>
        </tr>
        <tr>
            <td>
            <label  htmlFor="wd-submission-type"> Submission Type </label>
            <select id="wd-submission-type">
                <option value="ONLINE">Percentage</option>
                <option value="OFFLINE">Online</option>
            </select>
            <div>
                <label> Online Entry Options </label> <br/>
                <input type="checkbox" name="check-genre" id="wd-chkbox-text_entry"/>
                <label htmlFor="wd-chkbox-comedy">Text Entry</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-website_url"/>
                <label htmlFor="wd-chkbox-drama">Website URL</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-media_recordings"/>
                <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-student_annotation"/>
                <label htmlFor="wd-chkbox-fantasy">Student Annotation</label> <br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-file_uploads"/>
                <label htmlFor="wd-chkbox-fantasy">File Uploads</label>
            </div>
            </td>
        </tr>
        <tr>
            <td>
            <label  htmlFor="wd-assign-grp"> Assign to </label>
            <input id="wd-assign-grp" type="text" placeholder="Everyone"></input>
            </td>
        </tr>
        <tr>
            <td>
            <label htmlFor="wd-text-fields-due"> Due </label>
            <input type="date" id="wd-text-fields-due"/><br/>
            </td>
        </tr>
        <tr>
            <td>
            <label htmlFor="wd-text-fields-available-from"> Availale from </label>
            <input type="date" id="wd-text-fields-available-from"/><br/>
            </td>
        </tr>
        <tr>
            <td>
            <label htmlFor="wd-text-fields-until"> Until </label>
            <input type="date" id="wd-text-fields-until"/><br/>
            </td>
        </tr>
        </tbody>
      </table>
      <footer className="footer"> 
            <hr className="footer-line"></hr>
        </footer>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button type="submit" style={{margin: "5px"}}>Cancel</button>
        <button type="submit" style={{margin: "5px"}}>Save</button>
        </div>
    </div>
);}
