"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Skeleton } from "../../../components/ui/skeleton";
import { Check, ShieldAlert, ThumbsDown, ThumbsUp, X } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useState } from "react";

export default function Result({ responseData, loading, errorStatus }) {
  const [feedbackReturned, setFeedbackReturned] = useState(false);

  const handleYes = () => {
    setFeedbackReturned(true);
    // Call API to send feedback
    console.log("yes", responseData);
  };

  return (
    <>
      <div className='pt-8'>
        {responseData && (
          <div className='mb-8 space-y-6'>
            <h1 className='text-5xl font-oswald text-neutral-900 '>Potential Conditions Identified:</h1>
            <p className='text-lg text-neutral-500'>Based on the symptoms you entered, we have analyzed your health concerns and identified potential problems. Here are the results:</p>
          </div>
        )}

        {loading && <Skeleton className='bg-neutral-200 w-full h-[200px] mt-4 rounded-3xl' />}
        {!loading && errorStatus && (
          <p className='text-red-400 text-lg flex items-center gap-x-2'>
            <ShieldAlert />
            Error Fetching Results. Please try again later!
          </p>
        )}
        {!loading && responseData && (
          <div className='flex flex-col space-y-8'>
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
            <div className='space-y-4'>
              {!feedbackReturned && (
                <>
                  <p className='text-lg text-neutral-500'>Did this information meet your satisfaction? </p>
                  <div className='flex space-x-2 '>
                    <Button
                      onClick={handleYes}
                      className='space-x-2 flex items-center text-neutral-500 bg-white hover:bg-neutral-200 border-neutral-300 border-1'
                    >
                      <ThumbsUp className='text-neutral-400' />
                      {/* <p>Yes</p> */}
                    </Button>
                    <Button
                      onClick={() => setFeedbackReturned(true)}
                      className='space-x-2 flex items-center text-neutral-500 bg-white hover:bg-neutral-200 border-neutral-300 border-1'
                    >
                      <ThumbsDown className='text-neutral-400' />
                      {/* <p>No</p> */}
                    </Button>
                  </div>
                </>
              )}
              {feedbackReturned && (
                <>
                  <p className='text-lg text-neutral-500'>Thank you for your response. This helps us refine our services.</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
