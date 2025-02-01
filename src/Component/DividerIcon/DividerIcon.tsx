import { SvgWrapper } from './DividerIcon.styles';

type DividerIconProps = {
  path: string;
};

const DividerIcon = ({ path }: DividerIconProps) => {
  return (
    <SvgWrapper>
      <img src={path} alt="Icon" />
    </SvgWrapper>
  );
};

export default DividerIcon;
