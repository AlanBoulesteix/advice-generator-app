import { AdviceButtonStyled } from './AdviceButton.styles';

type AdviceButtonProps = {
  onClick: () => void;
};

const AdviceButton = ({ onClick }: AdviceButtonProps): JSX.Element => {
  return (
    <AdviceButtonStyled onClick={onClick}>
      <img src="/images/icon-dice.svg" alt="Dice Icon" />
    </AdviceButtonStyled>
  );
};

export default AdviceButton;
