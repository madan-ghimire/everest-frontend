import { Col, Row, Space, Typography } from "antd";
import React from "react";
import { Container } from "../../styledGlobal/container";
import { Foot, Footlogo, Footlist, Footcopy } from "./styles/style";
import { GrFacebookOption } from "react-icons/gr";
import { MailOutlined, PhoneFilled } from "@ant-design/icons";

import { AiFillYoutube } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./styles/style.scss";
const { Title, Text } = Typography;

const Footer = () => {
  return (
    <Foot>
      <Container>
        <Row style={{ width: "100%" }}>
          <Col lg={6} md={6} sm={12} xs={24}>
            <Footlogo>
              <NavLink to="/">
                <img
                  src={logo}
                  alt=""
                  style={{ width: "120px", height: "100px" }}
                />
              </NavLink>
            </Footlogo>
            <Space size={12}>
              <a
                href="https://www.fb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="sociallink"
              >
                <GrFacebookOption />
              </a>
              <a
                href="https://www.youtube.com"
                className="sociallink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube style={{ color: "#f34423" }} />
              </a>
            </Space>
          </Col>
          <Col lg={6} md={6} sm={12} xs={24}>
            <Title level={5} className="footer-title">
              Quick Links
            </Title>
            <Footlist>
              <NavLink to="/" className="footer-links">
                About Us
              </NavLink>
              <NavLink to="/events" className="footer-links">
                News & Events
              </NavLink>
              <NavLink to="/gallery" className="footer-links">
                Gallery
              </NavLink>
              <NavLink to="/contact" className="footer-links">
                Contact Us
              </NavLink>
              <NavLink to="/admission" className="footer-links">
                Admission Form
              </NavLink>
            </Footlist>
          </Col>
          <Col lg={6} md={6} sm={12} xs={24}>
            <Title level={5} className="footer-title">
              Academics
            </Title>
            <Footlist>
              <NavLink to="/" className="footer-links">
                Science
              </NavLink>
              <NavLink to="/" className="footer-links">
                Management
              </NavLink>
              <NavLink to="/" className="footer-links">
                Humanities
              </NavLink>
              <NavLink to="/" className="footer-links">
                Computer Science
              </NavLink>
            </Footlist>
          </Col>
          <Col lg={6} md={6} sm={12} xs={24}>
            <Title level={5} className="footer-title">
              Contact Details
            </Title>
            <Footlist>
              <NavLink to="" className="footer-links"></NavLink>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chuchchepati-7,+Chabahil,+Kathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-links"
              >
                <Text className="footer-links">
                  Chuchchepati-7, Chabahil, Kathmandu
                </Text>
              </a>
              <a href="tel:+9779801234556">
                <PhoneFilled
                  style={{ marginRight: ".5rem", transform: "rotate(90deg)" }}
                />
                +977 9801234556
              </a>
              <Text className="footer-links">
                <a href="mailto:admin@everest.com">admin@everest.com</a>
              </Text>
            </Footlist>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Footcopy>
            <Text className="footcopy">
              &copy; Copyright {new Date().getFullYear()} All Right Reserved.
              Everest Public Academy.
            </Text>
            <Text className="footcopy">
              Designed by <a href="quatum.co">Quantum IT Solution.</a>
            </Text>
          </Footcopy>
        </Row>
      </Container>
    </Foot>
  );
};

export default Footer;
