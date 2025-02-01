import { keyframes, styled } from 'styled-components';

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
from {
  opacity: 1;
  transform: translateY(0);
  }
  to{
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const AdviceIdText = styled.p<{ $fade: boolean }>`
  height: 17.5px;
  color: var(--secondary-color);
  font-size: 0.8rem;
  letter-spacing: 0.4rem;
  margin-bottom: 1rem;
  animation: ${({ $fade }) => ($fade ? fadeOut : fadeIn)} 0.5s forwards;
`;

export const AdviceText = styled.p<{ $fade: boolean }>`
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ $fade }) => ($fade ? fadeOut : fadeIn)} 0.5s forwards;

  @media (max-width: 425px) {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
`;
