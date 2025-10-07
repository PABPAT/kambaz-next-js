import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
            <Row xs={1} md={5} className="g-4">
                <Col className="wd-dashboard-course" style={{ width: '300px' }}>
                    <Card>
                        <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                    <CardImg variant="top" src="/images/React.jpg" width="100%" height={160} />
                    <CardBody>
                        <CardTitle className = "wd-dashbaord-course-title text-nowrap overflow-hidden"> CS1234 React JS </CardTitle>
                        <CardText className="wd-dashboard-course-title overflow-hidden" style={{ height: '100px' }}>
                            Full Stack software developer
                        </CardText>
                        <Button> Go </Button>
                    </CardBody>
                        </Link>
                    </Card>
                </Col>
            <Col className="wd-dashboard-course" style={{ width: '300px' }}>
                <Card>
                    <Link href="/Courses/2345/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/React.jpg" width="100%" height={160} />
                <CardBody>
                <CardTitle className = "wd-dashboard-course-title text-nowrap overflow-hidden"> CS2345 Node JS </CardTitle>
                <CardText className="wd-dashboard-course-title overflow-hidden" style={{ height: '100px' }}>
                    Full Stack software developer
                </CardText>
                <Button> Go </Button>
                </CardBody>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: '300px' }}>
                <Card>
                    <Link href="/Courses/3456/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/React.jpg" width="100%" height={160} />
                <CardBody>
                <CardTitle className = "wd-dashboard-course-title text-nowrap overflow-hidden"> CS3456 AI </CardTitle>
                <CardText className="wd-dashboard-course-title overflow-hidden" style={{ height: '100px' }}>
                    Full Stack software developer
                </CardText>
                <Button> Go </Button>
                </CardBody>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: '300px' }}>
                <Card>
                    <Link href="/Courses/4567/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/React.jpg" width="100%" height={160} />
                <CardBody>
                <CardTitle className = "wd-dashboard-course-title text-nowrap overflow-hidden"> CS4567 Machine Learning </CardTitle>
                <CardText className="wd-dashboard-course-title overflow-hidden" style={{ height: '100px' }}>
                    Full Stack software developer
                </CardText>
                <Button> Go </Button>
                </CardBody>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: '300px' }}>
                <Card>
                    <Link href="/Courses/5678/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/React.jpg" width="100%" height={160} />
                <CardBody>
                <CardTitle className = "wd-dashboard-course-title text-nowrap overflow-hidden"> CS5678 Machine Learning </CardTitle>
                <CardText className="wd-dashboard-course-title overflow-hidden" style={{ height: '100px' }}>
                    Full Stack software developer
                </CardText>
                <Button> Go </Button>
                </CardBody>
                    </Link>
                </Card>
            </Col>
                <Col className="wd-dashboard-course" style={{ width: '300px' }}>
                <Card>
                    <Link href="/Courses/6789/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/React.jpg" width="100%" height={160} />
                <CardBody>
                <CardTitle className = "wd-dashboard-course-title text-nowrap overflow-hidden"> CS6789 Deep Learning </CardTitle>
                <CardText className="wd-dashboard-course-title overflow-hidden" style={{ height: '100px' }}>
                    Full Stack software developer
                </CardText>
                <Button> Go </Button>
                </CardBody>
                    </Link>
                </Card>
            </Col>
                <Col className="wd-dashboard-course" style={{ width: '300px' }}>
                <Card>
                    <Link href="/Courses/7890/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/React.jpg" width="100%" height={160} />
                <CardBody>
                <CardTitle className = "wd-dashboard-course-title text-nowrap overflow-hidden"> CS7890 Natural Language Processing </CardTitle>
                <CardText className="wd-dashboard-course-title overflow-hidden" style={{ height: '100px' }}>
                    Full Stack software developer
                </CardText>
                <Button> Go </Button>
                </CardBody>
                    </Link>
                </Card>
            </Col>
                <Col className="wd-dashboard-course" style={{ width: '300px' }}>
                <Card>
                    <Link href="/Courses/8901/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/React.jpg" width="100%" height={160} />
                <CardBody>
                <CardTitle className = "wd-dashboard-course-title text-nowrap overflow-hidden"> CS8901 Data Mining </CardTitle>
                <CardText className="wd-dashboard-course-title overflow-hidden" style={{ height: '100px' }}>
                    Full Stack software developer
                </CardText>
                <Button> Go </Button>
                </CardBody>
                    </Link>
                </Card>
            </Col>
            </Row>
        </div>
    </div>
);}