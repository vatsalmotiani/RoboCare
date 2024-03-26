"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Skeleton } from "../../../components/ui/skeleton";
import { Bot, Check, ShieldAlert, ThumbsDown, ThumbsUp, X } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useState } from "react";
import Footer from "../../../components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordian";

export default function Result({ responseData, loading, errorStatus }) {
  const [feedbackReturned, setFeedbackReturned] = useState(false);

  const Feedback = () => {
    return (
      <div className='space-y-4'>
        {!feedbackReturned && (
          <>
            <p className='text-lg text-neutral-500'>Did this information meet your satisfaction? </p>
            <div className='flex space-x-2 '>
              <Button
                onClick={handleFeedback}
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
            <div className='text-lg text-neutral-500 flex space-x-2'>
              <Bot /> <p>Thank you for your response. This helps us refine our services.</p>
            </div>
          </>
        )}
      </div>
    );
  };

  const handleFeedback = () => {
    setFeedbackReturned(true);
    // Call API to send feedback
    console.log("Yes", responseData);
  };

  // Check if responseData is not null and has the percentages property
  const sortedData =
    responseData && responseData.percentages
      ? // Convert responseData.percentages to an array of objects
        Object.entries(responseData.percentages)
          .map(([disease, percentage]) => ({ disease, percentage }))
          // Sort the array of objects by percentage in descending order
          .sort((a, b) => b.percentage - a.percentage)
      : []; // Default to an empty array if responseData is null or doesn't have the percentages property

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
            {/* <div className='flex gap-x-4 flex-wrap'> */}
            <div className=''>
              {sortedData.map(({ disease, percentage }, i) => (
                <Accordion
                  key={i}
                  type='single'
                  collapsible
                >
                  <AccordionItem value={`item-${i}`}>
                    <AccordionTrigger className=''>
                      <div className='font-bold flex space-x-4 items-center'>
                        <p className='font-medium  bg-blue-600 text-white py-2 px-4 rounded-full'>{i + 1}</p>
                        <p className='text-2xl'>{disease}</p>
                        <p className='text-blue-600'>{percentage.toFixed(0)}%</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className='text-lg flex flex-col space-y-6 '>
                        <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odit veritatis aut enim earum, voluptates quia reiciendis exercitationem culpa incidunt.</p>
                        <div className='space-y-1'>
                          <p className='font-semibold text-blue-600'>Cause</p>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odit veritatis aut enim earum, voluptates quia reiciendis exercitationem culpa incidunt.</p>
                        </div>
                        <div className='space-y-1'>
                          <p className='font-semibold text-blue-600'>Treatment</p>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odit veritatis aut enim earum, voluptates quia reiciendis exercitationem culpa incidunt.</p>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odit veritatis aut enim earum, voluptates quia reiciendis exercitationem culpa incidunt.</p>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odit veritatis aut enim earum, voluptates quia reiciendis exercitationem culpa incidunt.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                // --------------------------------------------

                // <div key={i}>
                //   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odit veritatis aut enim earum, voluptates quia reiciendis exercitationem culpa incidunt.</p>
                //   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odit veritatis aut enim earum, voluptates quia reiciendis exercitationem culpa incidunt.</p>
                //   <p className='text-lg font-medium'>Cure</p>
                //   <ol>
                //     <li>Lorem ipsum dolor sit amet consectetur.</li>
                //     <li>Lorem ipsum dolor sit amet consectetur.</li>
                //     <li>Lorem ipsum dolor sit amet consectetur.</li>
                //   </ol>
                // </div>
                // --------------------------------------------
                // <Card
                //   className='mb-4 rounded-3xl p-6 text-white bg-blue-600 border-none flex flex-col items-center '
                //   key={i}
                // >
                //   <CardHeader className='text-xl'>{disease}</CardHeader>
                //   <CardContent className='text-6xl'>{percentage.toFixed(0)}%</CardContent>
                // </Card>
              ))}
            </div>
            <Feedback />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}
