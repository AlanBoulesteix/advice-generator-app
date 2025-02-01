import { styled } from "styled-components";


export const SvgWrapper = styled.div`
  padding-top: 1rem;

  @media (max-width: 425px) {
    padding-top: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
