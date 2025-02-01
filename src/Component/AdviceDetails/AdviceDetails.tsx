import { AdviceIdText, AdviceText } from './AdviceDetails.styles';

type AdviceDetailsProps = {
  id: number;
  text: string;
  fade: boolean;
};

const AdviceDetails = ({ id, text, fade }: AdviceDetailsProps) => {
  return (
    <>
      <AdviceIdText $fade={fade}>{id ? `ADVICE #${id}` : ''}</AdviceIdText>
      <AdviceText $fade={fade}>{text}</AdviceText>
    </>
  );
};

export default AdviceDetails;
