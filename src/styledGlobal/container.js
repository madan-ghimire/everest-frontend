import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1600px) {
    max-width: 1340px;
  }
  ${"" /* @media (min-width: 1900px) {
    max-width: 1840px;
  } */}
`;

// Antd follows the same rule as bootstrap breakdown
// $sm-device: 576px;
// $md-device: 768px;
// $lg-device: 992px;
// $xl-device: 1200px;