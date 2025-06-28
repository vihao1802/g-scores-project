import ListTopStudents from "../../components/scores/ListTopStudents";
import PageMeta from "../../components/common/PageMeta";
import TopStudent from "../../components/scores/TopStudent";
import StatisticStudents from "../../components/scores/StatisticStudents";
import StudentMetrics from "../../components/scores/StudentMetrics";

export default function Home() {
  return (
    <>
      <PageMeta
        title="G-Scores | Dashboard"
        description="This is G-Scores Dashboard page"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <StudentMetrics />
        </div>

        <div className="col-span-12">
          <StatisticStudents />
        </div>

        <div className="col-span-12">
          <TopStudent />
        </div>

        <div className="col-span-12">
          <ListTopStudents />
        </div>
      </div>
    </>
  );
}
