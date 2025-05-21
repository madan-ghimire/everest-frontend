import {
  Col,
  Row,
  Typography,
  Button,
  Menu,
  Dropdown,
  Drawer,
  Modal,
  Form,
  Input,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  MailOutlined,
  PhoneFilled,
  DownOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { RiMenu3Fill } from "react-icons/ri";
import { Container } from "../../styledGlobal/container";
import { Navigation, NavTop, Nav, Logo, NavList } from "./styles/style";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./styles/style.scss";
const { Text } = Typography;

const Navbar = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [windowWidth, setWindowWidth] = useState("");
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const showDrawer = () => {
    setMobileDrawer(true);
  };

  const hideDrawer = () => {
    setMobileDrawer(false);
  };

  const showLoginModal = () => {
    setIsLoginModalVisible(true);
  };

  const handleLoginCancel = () => {
    setIsLoginModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Login form values:", values);
    // TODO: handle login logic here
    setIsLoginModalVisible(false);
  };

  const aboutMenu = (
    <Menu>
      <Menu.Item>
        <NavLink to="/about/college">About the College</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/about/principal">Message From the Principal</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/about/chairman">Message From the Chairman</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/about/mission">About Our Mission</NavLink>
      </Menu.Item>
    </Menu>
  );
  const academicsMenu = (
    <Menu>
      <Menu.Item>
        <NavLink to="/academics/management">Management</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/academics/science">Science</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/academics/humanities">Humanities</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/academics/computer-science">Computer Science</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/academics/computer-science">
          Artificial Intelligence
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/academics/computer-science">
          Artificial Intelligence
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  const NavigationLink = () => {
    return (
      <NavList>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <Dropdown className="navlink" overlay={aboutMenu}>
          <Text>
            About Us <DownOutlined />
          </Text>
        </Dropdown>
        <Dropdown className="navlink" overlay={academicsMenu}>
          <Text>
            Academics <DownOutlined />
          </Text>
        </Dropdown>
        <NavLink className="navlink" to="/admission">
          Admission
        </NavLink>
        <NavLink className="navlink" to="/events">
          News & Events
        </NavLink>
        <NavLink className="navlink" to="/gallery">
          Gallery
        </NavLink>
        <NavLink className="navlink" to="/contact">
          Contact
        </NavLink>
      </NavList>
    );
  };

  return (
    <Navigation>
      <NavTop>
        <Container>
          <Row style={{ width: "100%" }} justify="space-between">
            <Col className="mobilestyle">
              <Text
                style={{
                  color: "#c3d1eb",
                  fontSize: ".9rem",
                  marginRight: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <a
                  href="mailto:contact@everestcollege.edu.np"
                  style={{
                    color: "#c3d1eb",
                    fontSize: ".9rem",
                    marginRight: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <MailOutlined style={{ marginRight: ".5rem" }} />
                  contact@everestcollege.edu.np
                </a>
              </Text>
              <Text
                style={{
                  color: "#c3d1eb",
                  fontSize: ".9rem",
                  marginRight: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <a
                  href="tel:+9779810203445"
                  style={{
                    color: "#c3d1eb",
                    fontSize: ".9rem",
                    marginRight: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <PhoneFilled
                    style={{ marginRight: ".5rem", transform: "rotate(90deg)" }}
                  />
                  +977 9810203445
                </a>
              </Text>
            </Col>
            {windowWidth > 767 ? (
              <Col>
                <Text
                  style={{
                    color: "#c3d1eb",
                    fontSize: ".9rem",
                    marginRight: "1.5rem",
                  }}
                >
                  Portal
                </Text>
                <Button
                  type="primary"
                  style={{ fontSize: ".9rem" }}
                  onClick={showLoginModal}
                >
                  Login
                </Button>
              </Col>
            ) : (
              ""
            )}
          </Row>
        </Container>
      </NavTop>
      <Nav>
        <Container>
          {windowWidth > 991 ? (
            <Row
              style={{ width: "100%" }}
              justify="space-between"
              align="middle"
            >
              <Logo>
                <NavLink to="/">
                  <img
                    src={logo}
                    alt=""
                    style={{ width: "100px", height: "90px" }}
                  />
                </NavLink>
              </Logo>
              <NavigationLink />
            </Row>
          ) : (
            <Row
              style={{ width: "100%" }}
              justify="space-between"
              align="middle"
            >
              <Logo>
                <NavLink to="/">
                  <img
                    src={logo}
                    alt=""
                    style={{ width: "100px", height: "90px" }}
                  />
                </NavLink>
              </Logo>
              <RiMenu3Fill
                style={{ fontSize: "1.2rem" }}
                onClick={showDrawer}
              />
              <Drawer
                placement="right"
                className="mobile"
                closable={true}
                onClose={hideDrawer}
                visible={mobileDrawer}
              >
                <NavigationLink />
              </Drawer>
            </Row>
          )}
        </Container>
      </Nav>

      <Modal
        title="Login"
        visible={isLoginModalVisible}
        onCancel={handleLoginCancel}
        footer={null}
        maskClosable={false}
        destroyOnClose
      >
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          style={{ width: "100%" }}
        >
          <Form.Item
            label="Username or Email"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username or email!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username or Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Navigation>
  );
};

export default Navbar;
