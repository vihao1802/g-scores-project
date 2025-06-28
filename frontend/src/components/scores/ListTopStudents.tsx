import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import useGetListTopStudents from "../../hooks/scores/useGetListTopStudents";

export default function ListTopStudents() {
  const [limit, setLimit] = useState(10);
  const { data, loading } = useGetListTopStudents(limit);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            List Top Students
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            List top students of group A including (math, physics, chemistry)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-8 text-sm font-medium text-gray-700 shadow-theme-xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value={10}>Top 10</option>
              <option value={20}>Top 20</option>
              <option value={30}>Top 30</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto pb-2 -mx-4 sm:mx-0">
        <div className="min-w-max w-full px-4 sm:px-0">
          <Table className="w-full">
            {/* Table Header */}
            <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
              <TableRow>
                <TableCell
                  isHeader
                  className="py-5 px-4 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  #
                </TableCell>
                <TableCell
                  isHeader
                  className="py-5 px-4 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Register Number
                </TableCell>
                <TableCell
                  isHeader
                  className="py-5 px-4 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Toán
                </TableCell>
                <TableCell
                  isHeader
                  className="py-5 px-4 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Vật Lý
                </TableCell>
                <TableCell
                  isHeader
                  className="py-5 px-4 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Hóa Học
                </TableCell>
                <TableCell
                  isHeader
                  className="py-5 px-4 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Total Score
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            {loading ? (
              <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                {[1, 2, 3, 4, 5].map((i) => (
                  <TableRow key={i}>
                    <TableCell className="py-3 px-4">
                      <div className="h-4 w-4 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <div className="flex items-center justify-center gap-3">
                        <div className="h-[50px] w-[50px] bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <div className="h-4 w-8 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <div className="h-4 w-8 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <div className="h-4 w-8 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <div className="h-4 w-12 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : data.length === 0 ? (
              <TableBody>
                <TableRow>
                  <TableCell className="py-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      No data available
                    </p>
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                {data.map((item, index) => (
                  <TableRow key={item.sbd}>
                    <TableCell className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {index + 1}
                    </TableCell>
                    <TableCell className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      <div className="flex justify-center items-center gap-3">
                        <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                          <img
                            src={"/images/user/user-01.jpg"}
                            className="h-[50px] w-[50px]"
                            alt={item.sbd}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {item.sbd}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {item.toan}
                    </TableCell>
                    <TableCell className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {item.vat_li}
                    </TableCell>
                    <TableCell className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {item.hoa_hoc}
                    </TableCell>
                    <TableCell className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {item.total_score}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </div>
      </div>
    </div>
  );
}
