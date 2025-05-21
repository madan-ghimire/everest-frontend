import { Carousel, Row, Col, Typography, Card, Button } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Container } from "../../styledGlobal/container";
import {
  Home,
  Slider,
  Slide,
  Abouthome,
  Admissionhome,
  Admissionimage,
  Newshome,
} from "./style/style";
import { CalendarOutlined } from "@ant-design/icons";
import { bignews, courses } from "./data.js";
import newsData from "./data.js";
import "./style/style.scss";

const { Title, Paragraph, Text } = Typography;

const slideshow = [
  {
    image:
      "http://max-themes.net/demos/kingster/kingster/upload/slider-1-2.jpg",
    name: "hello",
    id: 1,
  },
  {
    image: "http://max-themes.net/demos/kingster/kingster/upload/slider-2.jpg",
    name: "hello",
    id: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1364&q=80",
    name: "hello",
    id: 3,
  },
];

const carouselSettings = {
  autoplay: true,
  speed: 5000,
  effect: "fade",
  dots: false,
  pauseOnHover: true,
};
const Homepage = () => {
  return (
    <Home>
      <Navbar />
      <Slider>
        <Carousel {...carouselSettings}>
          {slideshow.map((item) => (
            <Slide key={item.id}>
              <img
                src={item.image}
                style={{ objectFit: "cover" }}
                alt={item.name}
              />
            </Slide>
          ))}
        </Carousel>
      </Slider>
      <Abouthome>
        <img
          src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt=""
          className="aboutimg"
        />
        <Container>
          <Row style={{ zIndex: "2" }}>
            <Col lg={8}>
              <Title level={5} className="small-title">
                University of Chicago
              </Title>
              <Title level={4} className="heading">
                About Our University
              </Title>
            </Col>
            <Col lg={16}>
              <Paragraph ellipsis={{ rows: 3 }} className="small-paragraph">
                We are one of the largest, most diverse universities in the USA
                with over 90,000 students in USA, and a further 30,000 studying
                across 180 countries for Kingster University.
              </Paragraph>
              <Paragraph ellipsis={{ rows: 4 }} className="big-paragraph">
                Let us express our sincere welcome to you all into the Manaslu
                world College family. We feel extremely delighted that you have
                chosen Manaslu to provide you with all possible means and
                strategies, that we believe, are prerequisites for your academic
                progress which is achieved through persistent dedication to the
                pious objectives of teaching and learning. This notion forms the
                foundation of all of our activities and approaches at the
                institution.
              </Paragraph>
              <Link to="/about/college" style={{ color: "#ffa797" }}>
                Read More.
              </Link>
            </Col>
          </Row>
        </Container>
      </Abouthome>
      <Row style={{ background: "#efefef", padding: "4rem 0" }}>
        <Container>
          <Title
            style={{ textAlign: "center", width: "100%", marginBottom: "3rem" }}
          >
            Our Courses
          </Title>
          <Row gutter={[40, 20]}>
            {courses.map((item) => (
              <Col lg={8} key={item.id.toString()}>
                <Link to={`/course/${item.id}`}>
                  <Card>
                    <img src={item.image} alt="hellocourse" />
                    <Title level={4} className="cardtitle" ellipsis>
                      {item.title}
                    </Title>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </Row>
      <Row>
        <Admissionhome>
          <img
            src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt=""
            className="aboutimg"
          />
          <Row>
            <Container className="aboutcontainer">
              <Admissionimage />
              <Col lg={14} style={{ zIndex: "2" }}>
                <Title level={5} className="small-title">
                  Apply Now
                </Title>
                <Title level={4} className="heading">
                  Admission Open for University of Chicago
                </Title>
                <Paragraph ellipsis={{ rows: 3 }} className="small-paragraph">
                  We are one of the largest, most diverse universities in the
                  USA with over 90,000 students in USA, and a further 30,000
                  studying across 180 countries for Kingster University.
                </Paragraph>
                <NavLink to="/admission-form">
                  <Button type="primary" className="primary">
                    Apply Now
                  </Button>
                </NavLink>
              </Col>
            </Container>
          </Row>
        </Admissionhome>
      </Row>
      <Newshome>
        <Row style={{ background: "#efefef", padding: "4rem 0" }}>
          <Container>
            <Title
              style={{
                textAlign: "center",
                width: "100%",
                marginBottom: "3rem",
              }}
            >
              Our News & Events
            </Title>
            <Row gutter={[40, 20]}>
              {bignews.map((item) => (
                <Col lg={14} md={24} key={item.id.toString()}>
                  <Link to={`/news/${item.id}`}>
                    <Card className="homenewscard">
                      <Col className="img-bigwrap">
                        <img
                          src={item.image}
                          alt="hellocourse"
                          className="img-big"
                        />
                      </Col>
                      <Text>
                        <CalendarOutlined /> {item.date}
                      </Text>
                      <Title level={4} ellipsis={{ rows: 2 }}>
                        {item.title}
                      </Title>
                      <Title level={5} className="author">
                        Author : {item.author}
                      </Title>
                    </Card>
                  </Link>
                </Col>
              ))}
              <Col lg={10} md={24}>
                <Row gutter={[0, 20]} style={{ width: "100%" }}>
                  {newsData.map((item) => (
                    <Col lg={24} md={12} key={item.id.toString()}>
                      <Link to={`/news/${item.id}`}>
                        <Card className="homenewscard">
                          <Row gutter={[40, 0]}>
                            <Col lg={8} style={{ overflow: "hidden" }}>
                              <img
                                src={item.image}
                                alt="hellocourse"
                                className="img-side"
                              />
                            </Col>
                            <Col lg={16}>
                              <Text>
                                <CalendarOutlined /> {item.date}
                              </Text>
                              <Title
                                className="title"
                                level={4}
                                ellipsis={{ rows: 2 }}
                              >
                                {item.title}
                              </Title>
                              <Title level={5} className="author">
                                Author : {item.author}
                              </Title>
                            </Col>
                          </Row>
                        </Card>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>
      </Newshome>
      <Footer />
    </Home>
  );
};

export default Homepage;
