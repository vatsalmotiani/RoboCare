"use client";
import { useState } from "react";
import SymptomForm from "@/components/symptom-form";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Info, ShieldAlert } from "lucide-react";

export default function Checkup() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  return (
    <div className='flex flex-col w-full'>
      <Card className='bg-neutral-800 border-none rounded-3xl'>
        <CardHeader className='gap-y-2 text-center mb-12 pt-8 bg-neutral-900 rounded-t-3xl'>
          <CardTitle className='text-white text-4xl'>Speed Scan</CardTitle>
          <CardDescription className='text-lg'>Select at least three symptoms to get started</CardDescription>
        </CardHeader>
        <CardContent className='flex gap-x-12 mb-4'>
          <SymptomForm
            setResponseData={setResponseData}
            setLoading={setLoading}
            setErrorStatus={setErrorStatus}
          />

          <div className='w-full md:w-1/2 bg-neutral-900 p-8 rounded-3xl'>
            <h1 className='text-2xl font-semibold text-white mb-8'>Result:</h1>
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
                    className='mb-4 rounded-3xl p-6 text-white bg-neutral-700 border-none flex flex-col items-center '
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
        <CardFooter className='text-neutral-600 gap-x-2'>
          <Info /> The information provided here is for informational purposes only and should not be construed as medical advice. Please consult a doctor for any medical concerns. For immediate medical assistance in India, call the national helpline number: 104.
        </CardFooter>
      </Card>
    </div>
  );
}
