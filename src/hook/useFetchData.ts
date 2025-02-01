import { fetchAdvice } from '../api/adviceSlipApi';

const useFetchData = async (
  setAdvice: React.Dispatch<
    React.SetStateAction<{ advice: string; id: number } | null>
  >,
  setFade: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    setFade(true);
    const response = await fetchAdvice();
    const data = response.data;
    setTimeout(() => {
      setAdvice(data.slip);
      setFade(false);
    }, 1000);
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
};

export default useFetchData;
