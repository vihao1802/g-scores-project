import React, { useState } from "react";
import ComponentCard from "../common/ComponentCard";
import Label from "./Label";
import Input from "./input/InputField";
import Button from "../ui/button/Button";
import { Score } from "../../types/score.type";
import useGetScoreByRegistrationNumber from "../../hooks/scores/useGetScoreByRegistrationNumber";

export default function SearchInput({
  onChange,
}: {
  onChange: (score: Score | null) => void;
}) {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [error, setError] = useState(false);
  const { getScoreByRegistrationNumber, loading } =
    useGetScoreByRegistrationNumber();

  const validateRegistrationNumber = (value: string) => {
    const isValidRegistrationNumber = /^[0-9]{8}$/.test(value);
    setError(!isValidRegistrationNumber);
    return isValidRegistrationNumber;
  };

  const handleRegistrationNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setRegistrationNumber(value);
    validateRegistrationNumber(value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registrationNumber && validateRegistrationNumber(registrationNumber)) {
      const score = await getScoreByRegistrationNumber(registrationNumber);
      if (score) onChange(score);
      else onChange(null);
    }
  };

  return (
    <ComponentCard title="Search Input">
      <div className="space-y-5 sm:space-y-6">
        <div>
          <Label>User Registration</Label>
          <form onSubmit={handleSearch} className="flex gap-2 items-start">
            <Input
              type="text"
              value={registrationNumber}
              error={error}
              onChange={handleRegistrationNumberChange}
              placeholder="Enter registration number"
              className="w-full"
              hint={error ? "Registration number must be 8 digits." : ""}
            />
            <Button
              disabled={error || !registrationNumber || loading}
              className="!py-3"
            >
              {loading ? "Loading..." : "Search"}
            </Button>
          </form>
        </div>
      </div>
    </ComponentCard>
  );
}
