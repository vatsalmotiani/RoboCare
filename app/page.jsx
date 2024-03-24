"use client";
import { useState } from "react";
import SymptomForm from "@/components/symptom-form";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Info, ShieldAlert } from "lucide-react";

export default function Home() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  return (
    <div className='flex flex-col w-full'>
      <Card className='bg-neutral-800 border-none rounded-3xl'>
        <CardHeader className='gap-y-2'>
          <CardTitle className='text-white text-4xl'>Speed Scan</CardTitle>
          <CardDescription className='text-lg'>Select at least three symptoms to get started</CardDescription>
        </CardHeader>
        <CardContent className='flex gap-x-12 mb-4'>
          <SymptomForm
            setResponseData={setResponseData}
            setLoading={setLoading}
            setErrorStatus={setErrorStatus}
          />

          <div className='w-1/2 bg-neutral-900 p-8 rounded-3xl'>
            <h1 className='text-2xl font-semibold text-white mb-8'>Result:</h1>
            {loading && <Skeleton className='bg-neutral-600 w-full h-[40px] mt-4 rounded-full' />}
            {!loading && errorStatus && (
              <p className='text-red-400 text-lg flex items-center gap-x-2'>
                <ShieldAlert />
                Error Fetching Results. Please try again later!
              </p>
            )}
            {!loading && responseData && (
              <div>
                {Object.entries(responseData.percentages).map(([disease, percentage], i) => (
                  <p key={i}>
                    {disease}: {percentage.toFixed(2)}%
                  </p>
                ))}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className='text-neutral-600 gap-x-2'>
          <Info /> The information provided here is for informational purposes only and should not be construed as medical advice. Please consult a doctor for any medical concerns. For immediate medical assistance in India, call the national helpline number: 104.
        </CardFooter>
      </Card>

      {/* <div className='gap-y-4 flex flex-col '>
        <p className='text-4xl font-semibold text-center text-white'>Speed Scan</p>
        <p className='text-neutral-500 text-center text-lg '>Select at least three symptoms to get started</p>
      </div>
      <Separator className='my-8 border-1 bg-neutral-600' />
      <SymptomForm
        setResponseData={setResponseData}
        setLoading={setLoading}
        setErrorStatus={setErrorStatus}
      /> */}
    </div>
  );
}
