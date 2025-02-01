import { useEffect, useState } from 'react';
import {
  AdviceCard,
  AdviceGeneratorAppWrapper,
} from './AdviceGeneratorApp.styles';
import AdviceButton from '../AdviceButton/AdviceButton';
import useFetchData from '../../hook/useFetchData';
import useResizeHandler from '../../hook/useResizeHandler';
import AdviceDetails from '../AdviceDetails/AdviceDetails';
import DividerIcon from '../DividerIcon/DividerIcon';

const AdviceGeneratorApp = (): JSX.Element => {
  const [path, setPath] = useState<string>(
    window.innerWidth < 768
      ? '/images/pattern-divider-mobile.svg'
      : '/images/pattern-divider-desktop.svg',
  );
  const [advice, setAdvice] = useState<{ advice: string; id: number } | null>(
    null,
  );
  const [fade, setFade] = useState<boolean>(false);
  useResizeHandler(setPath);
  useEffect(() => {
    useFetchData(setAdvice, setFade);
  }, []);

  const handleClick = () => {
    useFetchData(setAdvice, setFade);
  };

  return (
    <AdviceGeneratorAppWrapper>
      <AdviceCard>
        <AdviceDetails
          id={advice?.id ?? 0}
          text={advice?.advice ?? ''}
          fade={fade}
        />
        <DividerIcon path={path} />
        <AdviceButton onClick={handleClick} />
      </AdviceCard>
    </AdviceGeneratorAppWrapper>
  );
};

export default AdviceGeneratorApp;
