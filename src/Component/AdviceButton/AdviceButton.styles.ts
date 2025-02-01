import { styled } from 'styled-components';

export const AdviceButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--secondary-color);
  overflow: hidden;

  &:hover {
    cursor: pointer;
    outline: none;
    box-shadow: 0 0 5px var(--secondary-color), 0 0 10px var(--secondary-color),
      0 0 15px var(--secondary-color);
  }
`;
