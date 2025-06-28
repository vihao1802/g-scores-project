import ScoreApi from "../../api/scoreApi";
import { useEffect, useState } from "react";
import { ListTop10Students } from "../../types/score.type";

const useGetListTopStudents = (limit: number = 10) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ListTop10Students[]>([]);

  useEffect(() => {
    getListTopStudents();
  }, [limit]);

  const getListTopStudents = async () => {
    setLoading(true);
    try {
      const response = await ScoreApi.getListTopStudents(limit);
      if (response && response.success) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    getListTopStudents,
  };
};

export default useGetListTopStudents;
