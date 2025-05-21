import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { Container } from "../../styledGlobal/container";
import "./styles/style.scss";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const { Title, Paragraph } = Typography;

const ComputerScience = () => {
  return (
    <>
      <div className="computer-science-page">
        <div className="hero-section">
          <Container>
            <Title level={2} className="hero-title">
              Computer Science Program
            </Title>
            <Paragraph className="hero-subtitle">
              Equipping students with real-world knowledge and industry-relevant
              skills in software, hardware, and modern computing systems.
            </Paragraph>
          </Container>
        </div>

        <Container>
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} md={16}>
              <Card bordered={false}>
                <Title level={3}>Overview</Title>
                <Paragraph>
                  The Computer Science program at Everest College is designed to
                  develop students' understanding of the theoretical foundations
                  of information and computation, along with practical
                  techniques for their implementation and application in
                  computer systems.
                </Paragraph>
                <Paragraph>
                  This program balances both software and hardware aspects of
                  computing, enabling students to pursue a wide range of careers
                  in software engineering, systems development, web and mobile
                  development, AI, cybersecurity, and more.
                </Paragraph>

                <Title level={3}>Key Features</Title>
                <ul className="features-list">
                  <li>Modern curriculum aligned with industry standards</li>
                  <li>Hands-on programming labs and projects</li>
                  <li>
                    Workshops on emerging technologies (AI, ML, Blockchain)
                  </li>
                  <li>
                    Guidance for national and international IT competitions
                  </li>
                  <li>Internship opportunities in reputed IT firms</li>
                </ul>

                <Title level={3}>Eligibility</Title>
                <Paragraph>
                  Students who have successfully completed their SEE or
                  equivalent examination with an aptitude for mathematics and
                  logical thinking are eligible to apply.
                </Paragraph>

                <Title level={3}>Career Prospects</Title>
                <Paragraph>
                  Graduates of this program can pursue careers as:
                </Paragraph>
                <ul className="careers-list">
                  <li>Software Engineer / Developer</li>
                  <li>Web & Mobile App Developer</li>
                  <li>Cybersecurity Analyst</li>
                  <li>AI/ML Specialist</li>
                  <li>Network Administrator</li>
                  <li>IT Project Manager</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ComputerScience;
