import styled from 'styled-components';

export const AdviceGeneratorAppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdviceCard = styled.div`
  position: relative;
  background-color: var(--card-background-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 540px;
  height: 332px;

  @media (max-width: 425px) {
    width: 285px;
    height: 270px;
    padding: 1rem;
  }
`;
