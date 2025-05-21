import React from "react";
import { Row, Typography } from "antd";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Container } from "../../styledGlobal/container";
import { Singlenewsimg } from "./style/style";
import newsData from "../Homepage/data";
import "./style/style.scss";

const { Title, Paragraph } = Typography;

const NewsDetail = ({ match }) => {
  const data = newsData.find((p) => p.id === match.params.id);
  console.log(data);
  console.log(newsData);
  return (
    <>
      <Navbar />
      <Container style={{ marginBottom: "2rem" }}>
        <Row style={{ width: "100%" }}>
          <Singlenewsimg>
            <img
              src={data.image}
              alt=""
              style={{ maxHeight: "600px", objectFit: "cover" }}
            />
          </Singlenewsimg>
        </Row>
        <Row style={{ width: "80%", margin: "0 auto" }}>
          <Title className="newstitle">{data.title}</Title>
          <Paragraph className="description">{data.description}</Paragraph>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default NewsDetail;
