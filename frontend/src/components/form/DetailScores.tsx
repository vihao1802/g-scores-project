import { Score } from "../../types/score.type";
import ComponentCard from "../common/ComponentCard";
import BarChartAllSubjects from "../charts/bar/BarChartAllSubjects";
import RadialBarGroupASubjects from "../charts/radial/RadialBarGroupASubjects";

export default function DetailScores({ score }: { score: Score | null }) {
  return (
    <ComponentCard title="Detail Scores">
      {score ? (
        <div className="space-y-5 sm:space-y-6">
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-800 text-them-sm dark:text-white/90">
                  Registration Number
                </p>
                <p className="text-2xl font-medium text-gray-500 dark:text-gray-400">
                  {score.sbd}
                </p>
              </div>
            </div>
            <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Final Result
                  </h3>
                  <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                    All Subject Score
                  </p>
                </div>
              </div>
              <div className="relative">
                <BarChartAllSubjects score={score} />
              </div>
              {/* Listing Subject Score Line By line */}
              <div className="grid justify-center md:grid-cols-3 grid-cols-2 gap-2 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span>Toán</span>
                  <span className="font-semibold dark:text-gray-200">
                    {score.toan || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Ngữ Văn</span>
                  <span className="font-semibold dark:text-gray-200">
                    {score.ngu_van || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Ngoại Ngữ</span>
                  <span className="font-semibold dark:text-gray-200">
                    {score.ngoai_ngu || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Vật Lý</span>
                  <span className="font-semibold dark:text-gray-200">
                    {score.vat_li || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Hóa Học</span>
                  <span className="font-semibold dark:text-gray-200">
                    {score.hoa_hoc || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Sinh Học</span>
                  <span className="font-semibold dark:text-gray-200">
                    {score.sinh_hoc || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Lịch Sử</span>
                  <span className="font-semibold dark:text-gray-200">
                    {score.lich_su || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Địa Lý</span>
                  <span className="font-semibold dark:text-gray-200">
                    {score.dia_li || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>GDCD</span>
                  <span className="font-semibold dark:text-gray-200">
                    {score.gdcd || 0}
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6 space-y-5">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Group A Subjects
                  </h3>
                  <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                    All 3 subjects score (Toán, Vật Lý, Hóa Học)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col md:flex-row gap-4 bg-gray-50 dark:bg-gray-800/50 px-4 py-3 rounded-lg">
                <p className="font-medium text-gray-500 dark:text-gray-400">
                  Total Score
                </p>
                <p className="text-3xl font-semibold text-gray-800 dark:text-white/90">
                  {Number(score.toan || 0) +
                    Number(score.vat_li || 0) +
                    Number(score.hoa_hoc || 0)}
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    / 30
                  </span>
                </p>
              </div>
              <div className="relative">
                <div className="flex flex-wrap gap-2 justify-evenly">
                  <RadialBarGroupASubjects name="Toán" score={score.toan} />
                  <RadialBarGroupASubjects name="Vật Lý" score={score.vat_li} />
                  <RadialBarGroupASubjects
                    name="Hóa Học"
                    score={score.hoa_hoc}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No score found!</p>
      )}
    </ComponentCard>
  );
}
