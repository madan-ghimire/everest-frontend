import styled from "styled-components/macro";

export const Home = styled.div``;

export const Slider = styled.div`
  z-index: 1;
`;

export const Slide = styled.div`
  @media (min-width: 1600px) {
    height: 60vh;
  }
`;

export const Abouthome = styled.div`
  position: relative;
  width: 100%;
  padding: 5rem 0 8rem 0;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    background: #276298;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.7;
  }
  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgb(50 66 81 / 91%)
    );
    bottom: 0;
    height: 100px;
    width: 100%;
    z-index: 1;
  }
  
`;

export const Admissionhome = styled.div`
  position: relative;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    background: #276298;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.7;
  }
  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgb(50 66 81 / 91%)
    );
    bottom: 0;
    height: 100px;
    width: 100%;
    z-index: 1;
  }
`;

export const Admissionimage = styled.div`
  background: url("http://max-themes.net/demos/kingster/kingster/upload/shutterstock_734589535.jpg")
    no-repeat;
  height: 100%;
  width: 800px;
  position: absolute;
  background-size: cover;
  left: 0;
  bottom: 0;
  top: 0;
  margin-right: 2rem;
  z-index: 2;
  @media (max-width: 1600px) {
    width: 740px;
  }
  @media (max-width: 1400px) {
    width: 600px;
  }
  @media (max-width: 1199px) {
    width: 450px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Newshome = styled.div``;
