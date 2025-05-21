import React from "react";
import { Space, Typography, Form, Input, Row, Col, Button } from "antd";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Contact, ContactBg, Contactsection, Ctasection } from "./styles/style";
import { MailFilled, PhoneFilled, SendOutlined } from "@ant-design/icons";
import { GrLocation } from "react-icons/gr";
import "./styles/style.scss";

const { Title, Text } = Typography;
const { TextArea } = Input;

const Contactpage = () => {
  return (
    <Contact>
      <Navbar />
      <ContactBg>
        <Title
          level={4}
          style={{ fontSize: "1.5rem", fontWeight: "500", color: "#eee" }}
        >
          Contact Us
        </Title>
        <Text
          style={{ fontWeight: "500", color: "#e0e0e0", fontSize: ".9rem" }}
        >
          Drop us a message and we will get back to you soon
        </Text>
      </ContactBg>
      <Contactsection>
        <Row
          className="contact-box"
          // style={{
          //   background: "#fff",
          //   width: "60%",
          //   boxShadow: "0px 4px 9px 0px #c8c8c854",
          //   borderRadius: ".3rem",
          //   overflow: "hidden",
          // }}
        >
          <Form layout="vertical">
            <Title
              level={4}
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#000",
                marginBottom: "1rem",
              }}
            >
              Contact Form
            </Title>

            <Row gutter={[10]} style={{ width: "100%" }}>
              <Col lg={12} md={24} xs={24}>
                <Form.Item
                  label="Full Name"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Your Full Name" />
                </Form.Item>
              </Col>
              <Col lg={12} md={24} xs={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Your Email Address" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[10]} style={{ width: "100%" }}>
              <Col lg={12} md={24} xs={24}>
                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[
                    {
                      required: true,
                      message: "Please input your subject!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Your Subject Here" />
                </Form.Item>
              </Col>
              <Col lg={12} md={24} xs={24}>
                <Form.Item
                  label="Phone No."
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Your Phone Number" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                },
              ]}
            >
              <TextArea rows={6} placeholder="Enter Your Message" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                className="contact-btn"
                icon={<SendOutlined />}
              >
                Send Message{" "}
              </Button>
            </Form.Item>
          </Form>
          <Ctasection>
            <Title level={4} style={{ color: "#eee", fontWeight: "500" }}>
              Reach Us
            </Title>
            <Space direction="vertical" className="contact-list" size={14}>
              <Text>
                <MailFilled style={{ color: "#eee" }} />
                <Text style={{ color: "#eee", marginLeft: "1rem" }}>
                  <a
                    href="mailto:info@everestpublicacademy.edu.np"
                    style={{ color: "#eee" }}
                  >
                    info@everestpublicacademy.edu.np
                  </a>
                </Text>
              </Text>
              <Text>
                <PhoneFilled style={{ color: "#eee" }} />
                <Text style={{ marginLeft: "1rem", color: "#eee" }}>
                  01-5144119,
                </Text>
                <Text
                  style={{
                    display: "block",
                    color: "#eee",
                    marginLeft: "2rem",
                  }}
                >
                  9841504509, 9851009413
                </Text>
              </Text>
              <Text>
                <GrLocation className="location" style={{ color: "#eee" }} />
                <Text style={{ marginLeft: "1rem", color: "#eee" }}>
                  Everest Public Academy,
                </Text>
                <Text
                  style={{
                    display: "block",
                    color: "#eee",
                    marginLeft: "2rem",
                  }}
                >
                  Madhyapur Thimi – 9, Bode, 44800
                </Text>
              </Text>
            </Space>
          </Ctasection>
        </Row>
      </Contactsection>
      <Footer />
    </Contact>
  );
};

export default Contactpage;
