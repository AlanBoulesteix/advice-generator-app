import { useEffect } from 'react';

const useResizeHandler = (
  setSvgPath: React.Dispatch<React.SetStateAction<string>>,
) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSvgPath('/images/pattern-divider-mobile.svg');
      } else {
        setSvgPath('/images/pattern-divider-desktop.svg');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};

export default useResizeHandler;