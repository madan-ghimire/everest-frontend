import { Col, Row, Typography, List } from "antd";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Container } from "../../styledGlobal/container";
import { courses } from "../Homepage/data";
import { Courseimg, Coursedetail } from "./style/style";
import "./style/style.scss";

const { Title, Paragraph } = Typography;

const CoursePage = ({ match }) => {
  const coursedata = courses.find((p) => p.id === match.params.id);
  console.log(coursedata);
  return (
    <>
      <Navbar />
      <Container>
        <Row gutter={[20, 10]} style={{ width: "100%" }}>
          <Col lg={18}>
            <Courseimg>
              <img
                src={coursedata.image}
                style={{ objectFit: "cover" }}
                alt={coursedata.title}
              />
            </Courseimg>
            <Title level={3} className="course-heading">
              Curriculum
            </Title>
            <Row>
              <Col lg={12}>
                Options I
                <List
                  itemLayout="horizontal"
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta title="Ant Theory" />
                    </List.Item>
                  )}
                />
              </Col>
              <Col lg={12}>
                Options II
                <List
                  itemLayout="horizontal"
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta title="Ant Theory" />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
            <Title level={3} className="course-heading">
              Description
            </Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ex
              aliquid, praesentium, voluptates consequuntur ipsa debitis maxime
              incidunt aut provident quas ratione, quod at expedita. Dolorem
              enim veritatis harum eum.
            </Paragraph>
          </Col>
          <Col lg={6}>
            <Coursedetail>
              <Title className="title" level={3}>
                Course Details
              </Title>
              <Title level={4} className="title">
                {coursedata.title}
              </Title>
              <Title className="text">Level : High school</Title>

              <Title className="text">
                <ClockCircleOutlined style={{ marginRight: ".4rem" }} />
                {coursedata.time}
              </Title>
              <Title className="text">Shift : {coursedata.shift}</Title>
            </Coursedetail>
          </Col>
        </Row>
        <Row></Row>
      </Container>
      <Row></Row>
      <Footer />
    </>
  );
};

export default CoursePage;
