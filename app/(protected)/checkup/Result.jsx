"use client";

import { Skeleton } from "../../../components/ui/skeleton";
import { Bot, Download, Mail, ShieldAlert, ThumbsDown, ThumbsUp, BadgeInfo, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordian";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../../components/ui/hover-card";
import { findDisease, disease_info } from "../../../data/diseaseInfo";
import { useToast } from "../../../components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "../../../pdf/PDFFile";
import { MotionWrap2 } from "../../../components/MotionWrap";

export default function Result({ responseData, loading, errorStatus }) {
  const { toast } = useToast();
  const [feedbackReturned, setFeedbackReturned] = useState(false);

  const { isSignedIn, user, isLoaded } = useUser();

  const ErrorBlock = () => {
    return (
      <p className='text-red-500 font-medium text-lg flex items-center gap-x-2 mb-4'>
        <ShieldAlert />
        Error Fetching Results. Please try again later!
      </p>
    );
  };

  const ResultHeader = () => {
    return (
      <div className='mb-8 space-y-6'>
        <h1 className='text-5xl font-oswald text-neutral-900 '>Potential Conditions Identified:</h1>
        <p className='text-lg text-neutral-500'>Based on the symptoms you entered, we have analyzed your health concerns and identified potential problems. Here are the results:</p>
      </div>
    );
  };

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

  const handleFeedback = async () => {
    setFeedbackReturned(true);
    // const results = { responseData: responseData };
    try {
      const response = await fetch("http://127.0.0.1:3002/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
      });
      console.log("Feedback Result:", response);
    } catch (error) {
      //---------------CATCH BLOCK FOR ERRORS ---------------
      console.error("Feedback Error:", error);
    }
  };

  const handleEmail = async () => {
    try {
      const requestBody = { diseaseData: combinedData, firstName: user.firstName, email: user.primaryEmailAddress.emailAddress };
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response.status === 200) {
        toast({
          title: "Report Sent! ✅ ",
          description: "Check your inbox for details",
          duration: 4000,
        });
        console.log("Email Response:", response);
      }
    } catch (error) {
      //---------------CATCH BLOCK FOR ERRORS ---------------
      console.error("Email Error:", error);
      toast({
        description: "Error",
        duration: 1000,
        variant: "destructive",
      });
    }
  };

  const combinedData = [];

  // Check if responseData is not null and has the percentages property
  const sortedData =
    responseData && responseData.percentages
      ? // Convert responseData.percentages to an array of objects
        Object.entries(responseData.percentages)
          .map(([disease, percentage]) => ({ disease, percentage }))
          // Sorting
          .sort((a, b) => b.percentage - a.percentage)
      : []; // Else Null

  // Check if sortedData is not empty
  if (Array.isArray(sortedData) && sortedData.length > 0) {
    for (const { disease, percentage } of sortedData) {
      // Iterate over sortedData
      // Find the disease information from disease_info
      const diseaseDetails = findDisease(disease);

      // If disease information is found, combine it with percentage
      if (diseaseDetails) {
        combinedData.push({
          name: disease,
          percentage,
          ...diseaseDetails, // Spread other information from disease_info
        });
      }
    }
  }

  // console.log("responseData", responseData);
  // console.log("Sorted", sortedData);
  // console.log("Combined", combinedData);

  return (
    <>
      <div className='pt-8'>
        {!loading && errorStatus && <ErrorBlock />}
        {loading && !errorStatus && <Skeleton className='bg-neutral-200 w-full h-[200px] mt-4 rounded-3xl' />}

        {!loading && !errorStatus && responseData && (
          <>
            <ResultHeader />
            <div className='flex flex-col space-y-8'>
              {/* <div className='flex gap-x-4 flex-wrap'> */}

              {/* ---------------------------------------- Disease Listing ---------------------------------------- */}
              <div className=''>
                {combinedData.map(({ disease, percentage, description, name, cause, cure, id, link }, i) => (
                  <Accordion
                    key={id}
                    type='single'
                    collapsible
                  >
                    <MotionWrap2>
                      <AccordionItem value={`item-${i}`}>
                        {/* ---------------------------------------- Disease Header ---------------------------------------- */}
                        <AccordionTrigger className=''>
                          <HoverCard>
                            <HoverCardTrigger>
                              <div className='font-bold flex space-x-4 items-center'>
                                <p className='font-medium  bg-white border-neutral-300 border-2 text-neutral-500 py-2 px-4 rounded-full'>{i + 1}</p>
                                <p className='text-2xl'>{name}</p>
                                <p className='text-blue-600'>{percentage.toFixed(0)}%</p>
                                {percentage.toFixed(0) >= 75 && percentage.toFixed(0) <= 100 && <p className='font-medium text-neutral-400'>(Strong chance)</p>}
                              </div>
                            </HoverCardTrigger>
                            <HoverCardContent className='text-neutral-400 mx-2'>Expand To Read More</HoverCardContent>
                          </HoverCard>
                        </AccordionTrigger>
                        {/* ---------------------------------------- Expanded Content ---------------------------------------- */}
                        <AccordionContent>
                          <div className='text-lg flex flex-col space-y-6 '>
                            <p className=''>{description}</p>
                            <div className='space-y-1'>
                              <p className='font-semibold text-blue-600'>Cause</p>
                              <p>{cause}</p>
                            </div>
                            <div className='space-y-1'>
                              <p className='font-semibold text-blue-600'>Treatment</p>
                              {cure.map((point, i) => {
                                return <li key={i}>{point}</li>;
                              })}
                            </div>
                            <Link href={link}>
                              <div className='flex space-x-1 items-center  text-neutral-400 hover:text-neutral-600'>
                                <p className='text-xs'>Read More</p>
                                <ChevronRight className='w-4 ' />
                              </div>
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </MotionWrap2>
                  </Accordion>
                ))}
              </div>
              <div className='flex space-x-2'>
                <Button className='flex space-x-4 text-lg p-6 rounded-lg '>
                  <Download />
                  <PDFDownloadLink
                    document={
                      <PDFFile
                        // data={combinedData}
                        getFirstName={() => user.firstName} // Function returning firstName
                        getData={() => combinedData} // Function returning firstName
                      />
                    }
                    // fileName={`User_Report_RoboCare`}
                    fileName={`${user.firstName}_Report_RoboCare`}
                  >
                    {({ loading }) => (loading ? "Loading Document..." : "Download Report")}
                    {/* <p>Download Report</p> */}
                  </PDFDownloadLink>
                </Button>
                <Button
                  className='flex space-x-4 text-lg p-6 rounded-lg '
                  onClick={handleEmail}
                >
                  <Mail />
                  <p>Email Report</p>
                </Button>
              </div>
              <Feedback />
            </div>
          </>
        )}
      </div>
    </>
  );
}
