import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
            <div className="wd-dashboard-course">
            <Link href="/Courses/1234" className="wd-dashboard-course-link">
                <img src="/images/React.jpg" width={200} height={150} />
                <div>
                <h5> CS1234 React JS </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
            </div>
            <div className="wd-dashboard-course">
                <Link href="/Courses/2345" className="wd-dashboard-course-link">
                <img src="/images/React.jpg" width={200} height={150} />
                <div>
                <h5> CS2345 Node JS </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
            </div>
            <div className="wd-dashboard-course">
                <Link href="/Courses/3456" className="wd-dashboard-course-link">
                <img src="/images/React.jpg" width={200} height={150} />
                <div>
                <h5> CS3456 AI </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
            </div>
            <div className="wd-dashboard-course">
                <Link href="/Courses/4567" className="wd-dashboard-course-link">
                <img src="/images/React.jpg" width={200} height={150} />
                <div>
                <h5> CS4567 Machine Learning </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
            </div>
            <div className="wd-dashboard-course">
                <Link href="/Courses/5678" className="wd-dashboard-course-link">
                <img src="/images/React.jpg" width={200} height={150} />
                <div>
                <h5> CS5678 Machine Learning </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
            </div>
            <div className="wd-dashboard-course">
                <Link href="/Courses/6789" className="wd-dashboard-course-link">
                <img src="/images/React.jpg" width={200} height={150} />
                <div>
                <h5> CS6789 Deep Learning </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
            </div>
            <div className="wd-dashboard-course">
                <Link href="/Courses/7890" className="wd-dashboard-course-link">
                <img src="/images/React.jpg" width={200} height={150} />
                <div>
                <h5> CS7890 Natural Language Processing </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
            </div>
            <div className="wd-dashboard-course">
                <Link href="/Courses/8901" className="wd-dashboard-course-link">
                <img src="/images/React.jpg" width={200} height={150} />
                <div>
                <h5> CS8901 Data Mining </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
            </div>
        </div>
    </div>
);}