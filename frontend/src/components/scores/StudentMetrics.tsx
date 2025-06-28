import { GroupIcon } from "../../icons";
import useGetTotalStudents from "../../hooks/scores/useGetTotalStudents";
import { formatNumberWithCommas } from "../../utils/format";
import useGetReportBySubject from "../../hooks/scores/useGetReportBySubject";

export default function StudentMetrics() {
  const { totalStudents, loading } = useGetTotalStudents();
  const { data: reportBySubject, loading: loadingReportBySubject } =
    useGetReportBySubject("toan");

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Students
            </span>
            {loading ? (
              <div className="mt-2">
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            ) : (
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {formatNumberWithCommas(totalStudents)}
              </h4>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Students in Toán's Exam
            </span>
            {loadingReportBySubject ? (
              <div className="mt-2">
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            ) : (
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {reportBySubject
                  ? formatNumberWithCommas(
                      reportBySubject.level1 +
                        reportBySubject.level2 +
                        reportBySubject.level3 +
                        reportBySubject.level4
                    )
                  : 0}
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
