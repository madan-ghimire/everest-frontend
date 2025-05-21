import { Col, Row, Typography, Button, Menu, Dropdown, Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { MailOutlined, PhoneFilled, DownOutlined } from "@ant-design/icons";
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

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateWindowSize);
    console.log(windowWidth);
  }, [windowWidth]);

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };
  const showDrawer = () => {
    setMobileDrawer(true);
  };

  const hideDrawer = () => {
    setMobileDrawer(false);
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
        <NavLink to="/about/college">Management</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/about/principal">Science</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/about/chairman">Humanities</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/about/mission">Computer Software</NavLink>
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
            <Col className="mobilestyle" >
              <Text
                style={{
                  color: "#c3d1eb",
                  fontSize: ".9rem",
                  marginRight: "1.5rem",
                }}
              >
                <MailOutlined style={{ marginRight: ".5rem" }} />
                contact@everestcollege.edu.np
              </Text>
              <Text
                style={{
                  color: "#c3d1eb",
                  fontSize: ".9rem",
                  marginRight: "1.5rem",
                }}
              >
                <PhoneFilled
                  style={{ marginRight: ".5rem", transform: "rotate(90deg)" }}
                />
                +977 9810203445
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
                <Button type="primary" style={{ fontSize: ".9rem" }}>
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
    </Navigation>
  );
};

export default Navbar;
