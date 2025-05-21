import React from "react";
import { Card, Row, Space, Typography } from "antd";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Newsheader,
  Newssection,
  Wrap,
  Newsimg,
  Newscontent,
} from "./style/style";
import { ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";
import "./style/style.scss";
import { Container } from "../../styledGlobal/container";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const Newspage = () => {
  return (
    <>
      <Navbar />
      <Newsheader>
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
              News & Events
            </Title>
          </Wrap>
        </Container>
      </Newsheader>
      <Newssection>
        <Container>
          <Row>
            <Card className="newssectioncard">
              <Link to="/news/2">
                <Newsimg>
                  <img
                    src="https://images.unsplash.com/photo-1544776193-32d404ae608a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </Newsimg>
                <Newscontent>
                  <Row>
                    <Title
                      level={4}
                      className="title"
                      ellipsis={{ rows: 2 }}
                      style={{ color: "#000" }}
                    >
                      103 Life Lessons People Often Learn Too Late in Life (A
                      Little Manual For Life)
                    </Title>
                    <Space size={60} className="space">
                      <Text>
                        <ClockCircleOutlined style={{ marginRight: ".4rem" }} />
                        5 mins read.
                      </Text>
                      <Text>
                        <CalendarOutlined style={{ marginRight: ".4rem" }} />
                        2-10-2020
                      </Text>
                    </Space>
                  </Row>
                  <Paragraph
                    ellipsis={{ rows: 2, expandable: false }}
                    style={{ fontSize: "1rem" }}
                  >
                    Ant Design, a design language for background applications,
                    is refined by Ant UED Team. Ant Design, a design language
                    for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is
                    refined by Ant UED Team. Ant Design, a design language for
                    background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is
                    refined by Ant UED Team. Ant Design, a design language for
                    background applications, is refined by Ant UED Team. Design,
                    a design language for background applications, is refined by
                    Ant UED Team. Ant Design, a design language for background
                    applications, is refined by Ant UED Team. Ant Design, a
                    design language for background applications, is refined by
                    Ant UED Team. Ant Design, a design language for background
                    applications, is refined by Ant UED Team.
                  </Paragraph>
                </Newscontent>
              </Link>
            </Card>
          </Row>
        </Container>
      </Newssection>
      <Footer />
    </>
  );
};

export default Newspage;
