"use client";
import { useState } from "react";

import SymptomForm from "../../../components/symptom-form";
import { Separator } from "../../../components/ui/separator";
import Result from "./Result";

export default function Checkup() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  return (
    <div className='flex flex-col w-full space-y-8 p-8 md:p-24'>
      <p className='text-5xl md:text-7xl font-oswald'>Symptom Evaluation</p>
      <p className='text-lg text-neutral-500'>Receive Personalized Analysis. Select at least 3 symptoms to get started</p>
      <Separator />
      <SymptomForm
        setResponseData={setResponseData}
        setLoading={setLoading}
        setErrorStatus={setErrorStatus}
      />
      <Result
        responseData={responseData}
        loading={loading}
        errorStatus={errorStatus}
      />
    </div>
  );
}
