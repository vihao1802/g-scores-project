import ScoreApi from "../../api/scoreApi";
import { useEffect, useState } from "react";
import { ScoreReportAllSubjects } from "../../types/score.type";

const useGetReportByAllSubjects = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ScoreReportAllSubjects>({
    statistics: {},
    executionTime: 0,
  });

  useEffect(() => {
    getReportByAllSubjects();
  }, []);

  const getReportByAllSubjects = async () => {
    setLoading(true);
    try {
      const response = await ScoreApi.getReportByAllSubjects();
      if (response && response.success) {
        setData(response.data as ScoreReportAllSubjects);
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
    getReportByAllSubjects,
  };
};

export default useGetReportByAllSubjects;
