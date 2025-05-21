import styled from "styled-components/macro";

export const Foot = styled.div`
  background: #181818;
  padding: 4rem 0;
  color: #8d8d8d;
`;

export const Footlogo = styled.div`
  margin-bottom: 4rem;
  @media (max-width: 767px) {
    margin-bottom: 2rem;
  }
`;

export const Footlist = styled.div`
  margin-top: 2rem;
`;

export const Footcopy = styled.div`
  display: flex;
  color: #8d8d8d;
  width: 100%;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid #868686;
  margin-top: 1.5rem;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
