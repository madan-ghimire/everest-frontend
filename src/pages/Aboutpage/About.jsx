import { Col, Row, Typography } from "antd";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Aboutbanner, Wrap, Aboutsection } from "./style/style";
import { Container } from "../../styledGlobal/container";
import "./style/style.scss";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <>
      <Navbar />
      <Aboutbanner>
        <img
          src="https://images.unsplash.com/photo-1544776193-32d404ae608a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80"
          alt=""
          className="newsheader-inside"
        />
        <Container>
          <Wrap>
            <Title level={5} className="small-title">
              Know More
            </Title>
            <Title level={4} className="heading">
              About Us
            </Title>
          </Wrap>
        </Container>
      </Aboutbanner>
      <Container>
        <Row style={{ width: "100%" }} gutter={[20, 20]}>
          <Col lg={8}>
            <Title className="headin">University of Chicago</Title>
          </Col>
          <Col lg={8}>
            <Paragraph className="paragraph">
              If you would like to study in the university in the heart of the
              city that focus on chaning the world for better to morrow, you’re
              choosin the right place. We do not use special formulas to select
              students. We look at every single applicant’s application,
              academic and personal, to select students who suit to our
              community with a full range of backgrounds. If you would like to
              study
            </Paragraph>
          </Col>
          <Col lg={8}>
            <Paragraph className="paragraph">
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team. Ant Design, a design language for background applications,
              is refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.
            </Paragraph>
          </Col>
        </Row>
      </Container>
      <Aboutsection>
        <Row gutter={[20, 20]}>
          <Col lg={12}>
            <Paragraph className="paragraph-aboutsection">
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team. Ant Design, a design language for background applications,
              is refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.
            </Paragraph>
          </Col>
          <Col lg={12}>
            <img
              src="https://images.unsplash.com/photo-1544776193-32d404ae608a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80"
              alt=""
            />
          </Col>
        </Row>
        <Row gutter={[20, 20]}>
          <Col lg={12}>
            <img
              src="https://images.unsplash.com/photo-1544776193-32d404ae608a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80"
              alt=""
            />
          </Col>
          <Col lg={12}>
            <Paragraph className="paragraph-aboutsection">
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team. Ant Design, a design language for background applications,
              is refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.
            </Paragraph>
          </Col>
        </Row>
      </Aboutsection>
      <Footer />
    </>
  );
};

export default About;
