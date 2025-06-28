import { useEffect, useState } from "react";
import ScoreApi from "../../api/scoreApi";
import { ScoreReportSubject } from "../../types/score.type";

const useGetReportBySubject = (subject: string) => {
  const [data, setData] = useState<ScoreReportSubject | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getReportBySubject();
  }, [subject]);

  const getReportBySubject = async () => {
    setLoading(true);
    try {
      const response = await ScoreApi.getReportBySubject(subject);
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
    getReportBySubject,
  };
};

export default useGetReportBySubject;
