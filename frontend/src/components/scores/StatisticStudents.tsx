import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import useGetReportByAllSubjects from "../../hooks/scores/useGetReportByAllSubjects";

type ChartSeries = {
  name: string;
  data: number[];
  color?: string;
};

const subjectLabels: { [key: string]: string } = {
  toan: "Toán",
  ngu_van: "Ngữ Văn",
  ngoai_ngu: "Ngoại Ngữ",
  vat_li: "Vật Lý",
  hoa_hoc: "Hóa Học",
  sinh_hoc: "Sinh Học",
  lich_su: "Lịch Sử",
  dia_li: "Địa Lý",
  gdcd: "GDCD",
};

export default function StatisticStudents() {
  const { data, loading } = useGetReportByAllSubjects();
  const [selectedView, setSelectedView] = useState<"count" | "percentage">(
    "count"
  );
  const [chartData, setChartData] = useState<{
    options: ApexOptions;
    series: ChartSeries[];
  } | null>(null);

  useEffect(() => {
    if (!data?.statistics) return;

    const categories = Object.keys(data.statistics).map(
      (key) => subjectLabels[key] || key
    );

    const level1Data = Object.values(data.statistics).map(
      (stat) => stat.level1
    );
    const level2Data = Object.values(data.statistics).map(
      (stat) => stat.level2
    );
    const level3Data = Object.values(data.statistics).map(
      (stat) => stat.level3
    );
    const level4Data = Object.values(data.statistics).map(
      (stat) => stat.level4
    );

    setChartData({
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
          fontFamily: "Outfit, sans-serif",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 5,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        xaxis: {
          type: "category",
          categories: categories,
          labels: {
            style: {
              fontSize: "12px",
              fontWeight: 600,
            },
          },
        },
        yaxis: {
          title: {
            text: "Number of students",
            style: {
              fontSize: "14px",
              fontWeight: 600,
            },
          },
          labels: {
            formatter: function (val: number) {
              return val.toLocaleString();
            },
          },
        },
        legend: {
          position: "top",
          offsetY: 0,
          itemMargin: {
            horizontal: 10,
            vertical: 5,
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val: number) {
              return val.toLocaleString() + " students";
            },
          },
        },
      },
      series: [
        {
          name: "Level 1",
          data: level1Data,
          color: "#465FFF",
        },
        {
          name: "Level 2",
          data: level2Data,
          color: "#10B981",
        },
        {
          name: "Level 3",
          data: level3Data,
          color: "#F59E0B",
        },
        {
          name: "Level 4",
          data: level4Data,
          color: "#EF4444",
        },
      ],
    });
  }, [data, selectedView]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="h-[500px] w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>
    );
  }

  if (!chartData) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <p className="text-gray-600 dark:text-gray-400">No data available</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="mb-6 flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Statistic Report
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Distribution of students' scores and numbers by subjects
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            View:
          </span>
          <div className="flex rounded-md bg-gray-100 p-1 dark:bg-gray-800">
            <button
              onClick={() => setSelectedView("count")}
              className={`rounded px-3 py-1 text-sm font-medium ${
                selectedView === "count"
                  ? "bg-white text-gray-900 shadow dark:bg-gray-700 dark:text-white"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              Number
            </button>
          </div>
        </div>
      </div>
      <div className="h-[500px] w-full">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height="100%"
          width="100%"
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400 sm:grid-cols-4">
        <div className="flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-[#465FFF]"></div>
          <span>Level 1: &ge; 8 points</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-[#10B981]"></div>
          <span>Level 2: 8 points &lt; and &ge; 6 points</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-[#F59E0B]"></div>
          <span>Level 3: 6 points &lt; and &ge; 4 points</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-[#EF4444]"></div>
          <span>Level 4: &lt; 4 points</span>
        </div>
      </div>
    </div>
  );
}
