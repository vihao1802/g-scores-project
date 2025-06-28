import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { Score } from "../../../types/score.type";

export default function BarChartAllSubjects({ score }: { score: Score }) {
  const options: ApexOptions = {
    yaxis: {
      max: 10,
      min: 0,
    },
    series: [
      {
        name: "Score",
        data: [
          {
            x: "Toán",
            y: score.toan || 0,
          },
          {
            x: "Ngữ Văn",
            y: score.ngu_van || 0,
          },
          {
            x: "Ngoại Ngữ",
            y: score.ngoai_ngu || 0,
          },
          {
            x: "Vật Lý",
            y: score.vat_li || 0,
          },
          {
            x: "Hóa Học",
            y: score.hoa_hoc || 0,
          },
          {
            x: "Sinh Học",
            y: score.sinh_hoc || 0,
          },
          {
            x: "Lịch Sử",
            y: score.lich_su || 0,
          },
          {
            x: "Địa Lý",
            y: score.dia_li || 0,
          },
          {
            x: "GDCD",
            y: score.gdcd || 0,
          },
        ],
      },
    ],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    colors: ["#00E396"],
    dataLabels: {
      formatter: function (val: string | number | number[]): string {
        return val.toString();
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Score"],
      markers: {
        fillColors: ["#00E396"],
      },
    },
  };

  return (
    <Chart options={options} series={options.series} type="bar" height={600} />
  );
}
