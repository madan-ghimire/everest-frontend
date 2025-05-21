import React from "react";
import {
  Space,
  Typography,
  Form,
  Input,
  Row,
  Col,
  Button,
  message,
} from "antd";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Contact, ContactBg, Contactsection, Ctasection } from "./styles/style";
import { MailFilled, PhoneFilled, SendOutlined } from "@ant-design/icons";
import { GrLocation } from "react-icons/gr";
import "./styles/style.scss";

const { Title, Text } = Typography;
const { TextArea } = Input;

const Contactpage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Your message has been sent successfully!");
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form validation failed:", errorInfo);
    message.error("Please check the form and try again.");
  };

  // Custom validators
  const validateEmail = (_, value) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!value || emailRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid email address!");
  };

  const validatePhone = (_, value) => {
    const phoneRegex = /^[0-9\-\+\(\)\s]{7,15}$/;
    if (!value || phoneRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid phone number!");
  };

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
        <Row className="contact-box">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="contact-form"
            style={{
              boxShadow: "none",
              background: "transparent",
              width: "100%",
            }}
          >
            <Title
              level={4}
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#000",
                marginBottom: "1.5rem",
              }}
            >
              Contact Form
            </Title>

            <Row gutter={[16, 0]} style={{ width: "100%" }}>
              <Col lg={12} md={24} xs={24}>
                <Form.Item
                  label="Full Name"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your full name",
                    },
                    {
                      min: 3,
                      message: "Name must be at least 3 characters",
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
                      message: "Please enter your email address",
                    },
                    {
                      validator: validateEmail,
                    },
                  ]}
                >
                  <Input placeholder="Enter Your Email Address" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 0]} style={{ width: "100%" }}>
              <Col lg={12} md={24} xs={24}>
                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a subject",
                    },
                    {
                      min: 5,
                      message: "Subject must be at least 5 characters",
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
                      message: "Please enter your phone number",
                    },
                    {
                      validator: validatePhone,
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
                  message: "Please enter your message",
                },
                {
                  min: 20,
                  message: "Message should be at least 20 characters",
                },
              ]}
            >
              <TextArea
                rows={6}
                placeholder="Enter Your Message"
                style={{ resize: "none" }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="contact-btn"
                icon={<SendOutlined />}
                size="large"
              >
                Send Message
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
