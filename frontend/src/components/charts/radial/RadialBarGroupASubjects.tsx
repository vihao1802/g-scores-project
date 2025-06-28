import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

interface Props {
  name: string;
  score: number | null;
}

export default function RadialBarGroupASubjects({ name, score }: Props) {
  const options: ApexOptions = {
    series: [score ? score * 10 : 0],
    chart: {
      height: 300,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        dataLabels: {
          value: {
            formatter: function (val) {
              const value = val / 10;
              return value > 0 ? value.toFixed(1) : "0";
            },
            show: true,
            fontSize: "20px",
            offsetY: 20,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#13f2a7"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: [name],
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type="radialBar"
      width="100%"
    />
  );
}
