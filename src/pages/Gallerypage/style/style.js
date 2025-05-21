import styled from "styled-components/macro";

export const Gallerybanner = styled.div`
  height: 40vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 3.5rem;
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
  @media (max-width: 767px) {
    height: 25vh;
  }
`;

export const Wrap = styled.div`
  position: absolute;
  top: 40%;
  z-index: 2;
`;
