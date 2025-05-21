import styled from "styled-components/macro";

export const Contact = styled.div``;

export const ContactBg = styled.div`
  background: #0281d6;
  color: #fff;
  padding: 4rem 0 8rem 0;
  text-align: center;
`;

export const Contactsection = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: -4rem 0 6rem 0;
`;

export const Ctasection = styled.div`
  width: 40%;
  padding: 2rem 0 2rem 2rem;
  background: #e56c55;

  @media (max-width: 1400px) {
    width: 50%;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    padding-left: 1.2rem;
  }
  ${"" /* @media (min-width: 576px) {
    width: 100%;
  } */}
`;
