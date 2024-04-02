"use client";
import { useState } from "react";
import SymptomForm from "../../../components/symptom-form";
import { Separator } from "../../../components/ui/separator";
import Result from "./Result";
import { Button } from "../../../components/ui/button";
import Footer from "../../../components/Footer";
import { Download, Mail } from "lucide-react";
import { useToast } from "../../../components/ui/use-toast";

// import Image from "next/image";

export default function Checkup() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const { toast } = useToast();

  const handleEmail = async () => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
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

  return (
    <div className='flex flex-col w-full space-y-8 '>
      <p className='text-7xl font-oswald'>Symptom Evaluation</p>
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
      {!loading && !errorStatus && responseData && (
        <div className='flex space-x-2'>
          <Button className='flex space-x-4 text-lg p-6 rounded-lg '>
            <Download />
            <p>Download Report</p>
          </Button>
          <Button
            className='flex space-x-4 text-lg p-6 rounded-lg '
            onClick={handleEmail}
          >
            <Mail />
            <p>Email Report</p>
          </Button>
        </div>
      )}

      <Footer />
    </div>
  );
}
