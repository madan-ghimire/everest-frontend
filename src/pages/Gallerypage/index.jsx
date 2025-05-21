import React from "react";
import { Typography, Image, Row, Col } from "antd";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Container } from "../../styledGlobal/container";
import { Gallerybanner, Wrap } from "./style/style";
import "./style/style.scss";

const { Title } = Typography;

const imgdata = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "image name 1",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1608411404720-c8f0417bcdba?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "image name 2",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1593642633279-1796119d5482?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "image name 3",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1608403890696-0f18a2960153?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "image name 4",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1608273046182-cfd0bf5c13fd?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "image name 5",
  },
];

const Gallery = () => {
  return (
    <>
      <Navbar />
      <Gallerybanner>
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
              Gallery
            </Title>
          </Wrap>
        </Container>
      </Gallerybanner>
      <Container style={{ marginBottom: "2.5rem" }}>
        <Image.PreviewGroup>
          <Row gutter={[30, 30]}>
            {imgdata.map((item) => (
              <Col lg={8} md={12} sm={24}>
                <Image key={item.id} src={item.image} />
              </Col>
            ))}
          </Row>
        </Image.PreviewGroup>
      </Container>
      <Footer />
    </>
  );
};

export default Gallery;
