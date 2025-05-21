import React from "react";
import { Typography } from "antd";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Container } from "../../styledGlobal/container";
import { Aboutbanner, Wrap, Principalcontent } from "./style/style";
import "./style/style.scss";

const { Title, Paragraph } = Typography;

const Mission = () => {
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
              Our Mission
            </Title>
            <Title level={4} className="heading">
              Everest School Mission
            </Title>
          </Wrap>
        </Container>
      </Aboutbanner>
      <Container style={{ justifyContent: "center" }}>
        <Principalcontent>
          <Paragraph
            className="paragraph"
            style={{ color: "#fff", fontSize: "1rem" }}
          >
            <p>
              If you would like to study in the university in the heart of the
              city that focus on chaning the world for better to morrow, you’re
              choosin the right place. We do not use special formulas to select
              students. We look at every single applicant’s application,
              academic and personal, to select students who suit to our
              community with a full range of backgrounds.
            </p>
            <p>
              If you would like to study If you would like to study in the
              university in the heart of the city that focus on chaning the
              world for better to morrow, you’re choosin the right place. We do
              not use special formulas to select students. We look at every
              single applicant’s application, academic and personal, to select
              students who suit to our community with a full range of
              backgrounds. If you would like to study
            </p>
          </Paragraph>
        </Principalcontent>
      </Container>
      <Footer />
    </>
  );
};

export default Mission;
