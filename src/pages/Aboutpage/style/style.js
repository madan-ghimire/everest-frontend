import styled from "styled-components/macro";

export const Aboutbanner = styled.div`
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

export const Aboutsection = styled.div`
  overflow: hidden;
  background: #276298;
`;

//about us principal styles

export const Principalcontent = styled.div`
  background: #2d82d4;
  padding: 2rem 4rem;
  z-index: 5;
  margin: -7rem 0 4rem 0;
  width: 80%;
  display: flex;
  justify-content: center;
  border-radius: 0.3rem;
  @media (max-width: 767px) {
    width: 100%;
    margin-top: -5rem;
    padding: 2rem;
  }
`;
