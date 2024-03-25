"use client";
import { useState } from "react";
import SymptomForm from "../../../components/symptom-form";
import { Separator } from "../../../components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Skeleton } from "../../../components/ui/skeleton";
import { ShieldAlert } from "lucide-react";

export default function Checkup() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  return (
    <div className='flex flex-col w-full space-y-8'>
      <p className='text-2xl'>Checkup</p>
      <p className='text-lg'>Select at least three symptoms to get started</p>
      <SymptomForm
        setResponseData={setResponseData}
        setLoading={setLoading}
        setErrorStatus={setErrorStatus}
      />
      <div className=''>
        {responseData && <h1 className='text-3xl font-semibold text-neutral-900 mb-8'>Results:</h1>}
        {loading && <Skeleton className='bg-neutral-200 w-full h-[200px] mt-4 rounded-3xl' />}
        {!loading && errorStatus && (
          <p className='text-red-400 text-lg flex items-center gap-x-2'>
            <ShieldAlert />
            Error Fetching Results. Please try again later!
          </p>
        )}
        {!loading && responseData && (
          <div className='flex gap-x-4 flex-wrap'>
            {Object.entries(responseData.percentages).map(([disease, percentage], i) => (
              <Card
                className='mb-4 rounded-3xl p-6 text-white bg-blue-600 border-none flex flex-col items-center '
                key={i}
              >
                <CardHeader className='text-xl'>{disease}</CardHeader>
                <CardContent className='text-6xl'>{percentage.toFixed(0)}%</CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      {/* <Card className='bg-neutral-800 border-none rounded-3xl'>
        <CardHeader className='gap-y-2 text-center mb-12 pt-8 bg-neutral-900 rounded-t-3xl'>
          <CardTitle className='text-neutral-900 text-4xl'>RoboCare</CardTitle>
          <CardDescription className='text-lg'>Select at least three symptoms to get started</CardDescription>
        </CardHeader>
        <CardContent className='flex gap-x-12 mb-4'>
          <SymptomForm
            setResponseData={setResponseData}
            setLoading={setLoading}
            setErrorStatus={setErrorStatus}
          />

          <div className='w-full md:w-1/2 bg-neutral-900 p-8 rounded-3xl'>
            <h1 className='text-2xl font-semibold text-neutral-900 mb-8'>Result:</h1>
            {loading && <Skeleton className='bg-neutral-600 w-full h-[200px] mt-4 rounded-3xl' />}
            {!loading && errorStatus && (
              <p className='text-red-400 text-lg flex items-center gap-x-2'>
                <ShieldAlert />
                Error Fetching Results. Please try again later!
              </p>
            )}
            {!loading && responseData && (
              <div className='flex gap-x-4 flex-wrap'>
                {Object.entries(responseData.percentages).map(([disease, percentage], i) => (
                  <Card
                    className='mb-4 rounded-3xl p-6 text-neutral-900 bg-neutral-700 border-none flex flex-col items-center '
                    key={i}
                  >
                    <CardHeader className='text-xl'>{disease}</CardHeader>
                    <CardContent className='text-6xl'>{percentage.toFixed(0)}%</CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}
