import React from "react";
import {
  Typography,
  Form,
  Row,
  Input,
  Col,
  DatePicker,
  Radio,
  Button,
} from "antd";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Container } from "../../styledGlobal/container";
import { Admissionbanner, Wrap, Admissionform } from "./styles/style";
import "./styles/style.scss";

const { Title } = Typography;

const AdmissionForm = () => {
  return (
    <>
      <Navbar />
      <Admissionbanner>
        <img
          src="https://images.unsplash.com/photo-1544776193-32d404ae608a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80"
          alt=""
          className="newsheader-inside"
        />
        <Container>
          <Wrap>
            <Title level={5} className="small-title">
              Everest school's
            </Title>
            <Title level={4} className="heading">
              Admission Form
            </Title>
          </Wrap>
        </Container>
      </Admissionbanner>
      <Container>
        <Admissionform>
          <Form layout="vertical">
            <Title level={4} className="admission-title">
              Personal Details
            </Title>
            <Row style={{ marginTop: "2rem" }} gutter={[20, 20]}>
              <Col lg={16} md={12} xs={24}>
                <Form.Item label="Student's Name">
                  <Input placeholder="Student Name" />
                </Form.Item>
              </Col>
              <Col lg={8} md={12} xs={24}>
                <Form.Item label="Contact Number">
                  <Input placeholder="Contact Number" />
                </Form.Item>
              </Col>
              <Col lg={8} md={12} xs={24}>
                <Form.Item label="Date of Birth">
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col lg={10} md={12} xs={24}>
                <Form.Item label="Gender">
                  <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">Male</Radio.Button>
                    <Radio.Button value="b">Female</Radio.Button>
                    <Radio.Button value="c">Others</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item label="Father's Name">
                  <Input placeholder="Father's Name" />
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item label="Father's Occupation">
                  <Input placeholder="Father's Occupation" />
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item label="Father's Number">
                  <Input placeholder="Father's Number" />
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item label="Mother's Name">
                  <Input placeholder="Mother's Name" />
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item label="Mother's Occupation">
                  <Input placeholder="Mother's Occupation" />
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item label="Mother's Number">
                  <Input placeholder="Mother's Number" />
                </Form.Item>
              </Col>
              <Col lg={12} md={24} xs={24}>
                <Button type="primary">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Admissionform>
      </Container>
      <Footer />
    </>
  );
};

export default AdmissionForm;
