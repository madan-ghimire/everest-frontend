// import React from "react";
// import {
//   Typography,
//   Form,
//   Row,
//   Input,
//   Col,
//   DatePicker,
//   Radio,
//   Button,
// } from "antd";
// import Footer from "../../components/Footer";
// import Navbar from "../../components/Navbar";
// import { Container } from "../../styledGlobal/container";
// import { Admissionbanner, Wrap, Admissionform } from "./styles/style";
// import "./styles/style.scss";

// const { Title } = Typography;

// const AdmissionForm = () => {
//   return (
//     <>
//       <Navbar />
//       <Admissionbanner>
//         <img
//           src="https://images.unsplash.com/photo-1544776193-32d404ae608a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80"
//           alt=""
//           className="newsheader-inside"
//         />
//         <Container>
//           <Wrap>
//             <Title level={5} className="small-title">
//               University of Chicago
//             </Title>
//             <Title level={4} className="heading">
//               Admission Form
//             </Title>
//           </Wrap>
//         </Container>
//       </Admissionbanner>
//       <Container>
//         <Admissionform>
//           <Form layout="vertical">
//             <Title level={4} className="admission-title">
//               Personal Details
//             </Title>
//             <Row style={{ marginTop: "2rem" }} gutter={[20, 20]}>
//               <Col lg={16} md={12} xs={24}>
//                 <Form.Item label="Student's Name">
//                   <Input placeholder="Student Name" />
//                 </Form.Item>
//               </Col>
//               <Col lg={8} md={12} xs={24}>
//                 <Form.Item label="Contact Number">
//                   <Input placeholder="Contact Number" />
//                 </Form.Item>
//               </Col>
//               <Col lg={8} md={12} xs={24}>
//                 <Form.Item label="Date of Birth">
//                   <DatePicker />
//                 </Form.Item>
//               </Col>
//               <Col lg={10} md={12} xs={24}>
//                 <Form.Item label="Gender">
//                   <Radio.Group defaultValue="a" buttonStyle="solid">
//                     <Radio.Button value="a">Male</Radio.Button>
//                     <Radio.Button value="b">Female</Radio.Button>
//                     <Radio.Button value="c">Others</Radio.Button>
//                   </Radio.Group>
//                 </Form.Item>
//               </Col>
//               <Col lg={8} md={8} xs={24}>
//                 <Form.Item label="Father's Name">
//                   <Input placeholder="Father's Name" />
//                 </Form.Item>
//               </Col>
//               <Col lg={8} md={8} xs={24}>
//                 <Form.Item label="Father's Occupation">
//                   <Input placeholder="Father's Occupation" />
//                 </Form.Item>
//               </Col>
//               <Col lg={8} md={8} xs={24}>
//                 <Form.Item label="Father's Number">
//                   <Input placeholder="Father's Number" />
//                 </Form.Item>
//               </Col>
//               <Col lg={8} md={8} xs={24}>
//                 <Form.Item label="Mother's Name">
//                   <Input placeholder="Mother's Name" />
//                 </Form.Item>
//               </Col>
//               <Col lg={8} md={8} xs={24}>
//                 <Form.Item label="Mother's Occupation">
//                   <Input placeholder="Mother's Occupation" />
//                 </Form.Item>
//               </Col>
//               <Col lg={8} md={8} xs={24}>
//                 <Form.Item label="Mother's Number">
//                   <Input placeholder="Mother's Number" />
//                 </Form.Item>
//               </Col>
//               <Col lg={12} md={24} xs={24}>
//                 <Button type="primary">Submit</Button>
//               </Col>
//             </Row>
//           </Form>
//         </Admissionform>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default AdmissionForm;

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
  message,
} from "antd";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Container } from "../../styledGlobal/container";
import { Admissionbanner, Wrap, Admissionform } from "./styles/style";
import "./styles/style.scss";

const { Title } = Typography;

const AdmissionForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    message.success("Your admission form has been submitted successfully!");
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form validation failed:", errorInfo);
    message.error("Please fill all the required fields correctly.");
  };

  // Custom validators
  const validatePhoneNumber = (_, value) => {
    const phoneRegex = /^[0-9\-\+\(\)\s]{7,15}$/;
    if (!value || phoneRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid phone number!");
  };

  return (
    <>
      <Navbar />
      <Admissionbanner>
        <img
          src="https://images.unsplash.com/photo-1544776193-32d404ae608a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80"
          alt="University campus"
          className="newsheader-inside"
        />
        <Container>
          <Wrap>
            <Title level={5} className="small-title">
              University of Chicago
            </Title>
            <Title level={4} className="heading">
              Admission Form
            </Title>
          </Wrap>
        </Container>
      </Admissionbanner>
      <Container>
        <Admissionform>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            scrollToFirstError
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <Title level={4} className="admission-title">
              Personal Details
            </Title>
            <Row style={{ marginTop: "2rem" }} gutter={[24, 16]}>
              <Col lg={16} md={12} xs={24}>
                <Form.Item
                  label="Student's Name"
                  name="studentName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter student's name",
                    },
                    {
                      min: 3,
                      message: "Name must be at least 3 characters",
                    },
                  ]}
                >
                  <Input placeholder="Enter student's full name" />
                </Form.Item>
              </Col>
              <Col lg={8} md={12} xs={24}>
                <Form.Item
                  label="Contact Number"
                  name="contactNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter contact number",
                    },
                    {
                      validator: validatePhoneNumber,
                    },
                  ]}
                >
                  <Input placeholder="Enter contact number" />
                </Form.Item>
              </Col>
              <Col lg={8} md={12} xs={24}>
                <Form.Item
                  label="Date of Birth"
                  name="dateOfBirth"
                  rules={[
                    {
                      required: true,
                      message: "Please select date of birth",
                    },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col lg={10} md={12} xs={24}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: "Please select gender",
                    },
                  ]}
                >
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="male">Male</Radio.Button>
                    <Radio.Button value="female">Female</Radio.Button>
                    <Radio.Button value="other">Others</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>

              {/* Father's Details */}
              <Col span={24}>
                <Title
                  level={5}
                  style={{ marginTop: "16px", fontSize: "18px" }}
                >
                  Father's Details
                </Title>
              </Col>

              <Col lg={8} md={8} xs={24}>
                <Form.Item
                  label="Father's Name"
                  name="fatherName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter father's name",
                    },
                  ]}
                >
                  <Input placeholder="Enter father's full name" />
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item
                  label="Father's Occupation"
                  name="fatherOccupation"
                  rules={[
                    {
                      required: true,
                      message: "Please enter father's occupation",
                    },
                  ]}
                >
                  <Input placeholder="Enter father's occupation" />
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item
                  label="Father's Number"
                  name="fatherNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter father's contact number",
                    },
                    {
                      validator: validatePhoneNumber,
                    },
                  ]}
                >
                  <Input placeholder="Enter father's contact number" />
                </Form.Item>
              </Col>

              {/* Mother's Details */}
              <Col span={24}>
                <Title
                  level={5}
                  style={{ marginTop: "16px", fontSize: "18px" }}
                >
                  Mother's Details
                </Title>
              </Col>

              <Col lg={8} md={8} xs={24}>
                <Form.Item
                  label="Mother's Name"
                  name="motherName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter mother's name",
                    },
                  ]}
                >
                  <Input placeholder="Enter mother's full name" />
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item
                  label="Mother's Occupation"
                  name="motherOccupation"
                  rules={[
                    {
                      required: true,
                      message: "Please enter mother's occupation",
                    },
                  ]}
                >
                  <Input placeholder="Enter mother's occupation" />
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item
                  label="Mother's Number"
                  name="motherNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter mother's contact number",
                    },
                    {
                      validator: validatePhoneNumber,
                    },
                  ]}
                >
                  <Input placeholder="Enter mother's contact number" />
                </Form.Item>
              </Col>

              <Col span={24} style={{ marginTop: "16px" }}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ minWidth: "120px" }}
                  >
                    Submit Application
                  </Button>
                  <Button
                    style={{ marginLeft: "12px" }}
                    onClick={() => form.resetFields()}
                  >
                    Reset Form
                  </Button>
                </Form.Item>
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
