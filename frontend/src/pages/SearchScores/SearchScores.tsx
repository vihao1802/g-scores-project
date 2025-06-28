import PageMeta from "../../components/common/PageMeta";
import DetailScores from "../../components/form/DetailScores";
import SearchInput from "../../components/form/SearchInput";
import { Score } from "../../types/score.type";
import { useState } from "react";

const SearchScores = () => {
  const [score, setScore] = useState<Score | null>(null);

  return (
    <>
      <PageMeta
        title="G-Scores | Search Scores"
        description="This is G-Scores Search Scores page"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6">
          <SearchInput onChange={setScore} />
          <DetailScores score={score} />
        </div>
      </div>
    </>
  );
};

export default SearchScores;
