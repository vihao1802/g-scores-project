import { Response } from "../types/response.type";
import {
  Score,
  ScoreReportAllSubjects,
  ScoreReportSubject,
  ListTop10Students,
} from "../types/score.type";
import { BACKEND_URL } from "./index";

const prefix = `${BACKEND_URL}/scores`;

const ScoreApi = {
  async getScoreByRegistrationNumber(registrationNumber: string) {
    try {
      const response = await fetch(`${prefix}/${registrationNumber}`);
      const data: Response<Score> = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async getReportByAllSubjects() {
    try {
      const response = await fetch(`${prefix}/report-by-all-subjects`);
      const data: Response<ScoreReportAllSubjects> = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async getReportBySubject(subject: string) {
    try {
      const response = await fetch(`${prefix}/report-by-subject/${subject}`);
      const data: Response<ScoreReportSubject> = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async getListTopStudents(limit: number = 10) {
    try {
      const response = await fetch(
        `${prefix}/list-top-students?limit=${limit}`
      );
      const data: Response<ListTop10Students[]> = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async getTotalStudents() {
    try {
      const response = await fetch(`${prefix}/total-students`);
      const data: Response<number> = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default ScoreApi;
