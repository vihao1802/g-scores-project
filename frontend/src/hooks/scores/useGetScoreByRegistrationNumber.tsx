import { useState } from "react";
import ScoreApi from "../../api/scoreApi";

const useGetScoreByRegistrationNumber = () => {
  const [loading, setLoading] = useState(false);

  const getScoreByRegistrationNumber = async (registrationNumber: string) => {
    setLoading(true);
    try {
      const response = await ScoreApi.getScoreByRegistrationNumber(
        registrationNumber
      );

      if (response && response.success) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getScoreByRegistrationNumber,
  };
};

export default useGetScoreByRegistrationNumber;
