import { useEffect, useState } from "react";
import ScoreApi from "../../api/scoreApi";

const useGetTotalStudents = () => {
  const [loading, setLoading] = useState(false);
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    getTotalStudents();
  }, []);

  const getTotalStudents = async () => {
    setLoading(true);
    try {
      const response = await ScoreApi.getTotalStudents();
      if (response && response.success) {
        setTotalStudents(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    totalStudents,
    getTotalStudents,
  };
};

export default useGetTotalStudents;
