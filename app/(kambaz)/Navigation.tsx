import { AiOutlineDashboard } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { LuArrowLeftToLine } from "react-icons/lu";
export default function KambazNavigation() {
  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 110 }}
              id="wd-kambaz-navigation">
      <ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link" ><img src="/images/NEU.svg" alt="Northeastern University" width="75px" />
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link href ="/Account" id="wd-account-link" className="text-white text-decoration-none">
          <MdAccountCircle className="fs-1 text-white" />
          <br />Account
        </Link>
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-white text-decoration-none">
            <AiOutlineDashboard className="fs-1 text-danger" />
            <br />Dashboard
        </Link>
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link href="/Dashboard" id="wd-course-link" className="text-white text-decoration-none">
            <LiaBookSolid className="fs-1 text-danger" />
            <br />Courses
        </Link>
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link href="https://northeastern.instructure.com/calendar#view_name=month&view_start=2025-10-05" id="wd-calendar-link" className="text-white text-decoration-none">
              <SlCalender className="fs-1 text-danger" />
              <br />Calendar
        </Link>
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link href="https://northeastern.instructure.com/conversations#filter=type=inbox" id="wd-inbox-link" className="text-white text-decoration-none">
              <FaInbox className="fs-1 text-danger" />
              <br />Inbox
        </Link>
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link href="/Labs" id="wd-labs-link" className="text-white text-decoration-none">
              <LiaBookSolid className="fs-1 text-danger" />
              <br />Labs
        </Link>
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link href="http://northeastern.instructure.com/#" id="wd-labs-link" className="text-white text-decoration-none">
              <LiaCogSolid className="fs-1 text-danger" />
              <br />History
        </Link>
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link href="https://northeastern.instructure.com/accounts/1/external_tools/7097?launch_type=global_navigation" id="wd-studio-link" className="text-white text-decoration-none">
              <FaRegCircleUser className="fs-1 text-danger" />
              <br />Studio
        </Link>
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link href="https://help.instructure.com" id="wd-help-link" className="text-white text-decoration-none">
              <FiHelpCircle className="fs-1 text-danger" />
              <br />Help
        </Link>
      </ListGroupItem>
      <ListGroupItem className="bg-black border-0 text-center">
        <Link href="/Dashboard" id="wd-global-navigation-link" className="text-white text-decoration-none">
              <LuArrowLeftToLine className="fs-1 text-danger" />
              <br />
        </Link>
      </ListGroupItem>
    </ListGroup>
);}