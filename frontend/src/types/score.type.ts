export interface Score {
  id: number;
  sbd: string;
  toan: number | null;
  ngu_van: number | null;
  ngoai_ngu: number | null;
  vat_li: number | null;
  hoa_hoc: number | null;
  sinh_hoc: number | null;
  lich_su: number | null;
  dia_li: number | null;
  gdcd: number | null;
  ma_ngoai_ngu: string | null;
  created_at: string;
  updated_at: string;
}

export interface ScoreReportSubject {
  level1: number;
  level2: number;
  level3: number;
  level4: number;
  executionTime: number;
}

export interface ScoreReportAllSubjects {
  statistics: Record<string, Omit<ScoreReportSubject, "executionTime">>;
  executionTime: number;
}

export interface ListTop10Students {
  sbd: string;
  toan: number;
  vat_li: number;
  hoa_hoc: number;
  total_score: number;
}
