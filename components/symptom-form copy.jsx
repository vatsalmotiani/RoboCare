"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { SymptomsSchema } from "@/schema";
import { uniqueSymptoms } from "@/data/symptomsList";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Skeleton } from "@/components/ui/skeleton";

const SymptomForm = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(SymptomsSchema),
    defaultValues: {
      // email: "",
      // name: "",
      symptom1: "",
      symptom2: "",
      symptom3: "",
      // symptom4: "",
      // symptom5: "",
    },
  });

  //----------------------------------------------------FORM ON SUBMIT FUNCTION --------------------------------------------------------

  const onSubmit = async (data) => {
    const { symptom1, symptom2, symptom3, symptom4, symptom5 } = data; // EXTRACTING DATA
    // const { email, name, symptom1, symptom2, symptom3, symptom4, symptom5 } = data; // EXTRACTING DATA
    const requestBody = {
      symptom1,
      symptom2,
      symptom3,
      ...(symptom4 && { symptom4 }), // Include symptom4 if it has a value
      ...(symptom5 && { symptom5 }), // Include symptom5 if it has a value
    };
    console.log(requestBody);

    //---------------TRY BLOCK CALLING API ---------------
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:3001/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        const responseData = await response.json();
        setResponseData(responseData);
        console.log("Result:", responseData);
      } else {
        console.error("Failed to fetch:", response.status);
      }
    } catch (error) {
      //---------------CATCH BLOCK FOR ERRORS ---------------
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  // const onSubmit = async (data) => {
  //   // setLoading(true);
  //   const { email, name, symptom1, symptom2, symptom3, symptom4, symptom5 } = data; // EXTRACTING DATA
  //   const requestBody = {
  //     symptom1,
  //     symptom2,
  //     symptom3,
  //     symptom4,
  //     symptom5,
  //   };
  //   console.log(requestBody);

  //   //---------------TRY BLOCK CALLING API ---------------
  //   try {
  //     const response = await fetch("http://127.0.0.1:3001/predict", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(requestBody),
  //     });
  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log("Result:", responseData);
  //     } else {
  //       console.error("Failed to fetch:", response.status);
  //     }
  //   } catch (error) {
  //     //---------------CATCH BLOCK FOR ERRORS ---------------
  //     console.error("Error:", error);
  //   }
  // };

  const { pending } = useFormStatus();

  return (
    <div className='w-full'>
      {/* -----------------------------------------------------FORM FRONTEND----------------------------------------------------- */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-4'>
            {/* ---------------FORM EMAIL --------------- */}

            {/* <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type='email'
                      placeholder='your@email.com'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/* ---------------FORM NAME --------------- */}

            {/* <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Your Name'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/* ---------------FORM SYMPTOM 1 --------------- */}

            <FormField
              control={form.control}
              name='symptom1'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Symptom #1</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a symptom' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {uniqueSymptoms.map((symptom, i) => {
                        return (
                          <SelectItem
                            key={symptom.id}
                            value={symptom.value}
                          >
                            {symptom.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ---------------FORM SYMPTOM 2 --------------- */}

            <FormField
              control={form.control}
              name='symptom2'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Symptom #2</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a symptom' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {uniqueSymptoms.map((symptom, i) => {
                        return (
                          <SelectItem
                            key={symptom.id}
                            value={symptom.value}
                          >
                            {symptom.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ---------------FORM SYMPTOM 3 --------------- */}

            <FormField
              control={form.control}
              name='symptom3'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Symptom #3</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a symptom' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {uniqueSymptoms.map((symptom, i) => {
                        return (
                          <SelectItem
                            key={symptom.id}
                            value={symptom.value}
                          >
                            {symptom.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ---------------FORM SYMPTOM 4 --------------- */}

            <FormField
              control={form.control}
              name='symptom4'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Symptom #4</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='(Optional) Select a symptom' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {uniqueSymptoms.map((symptom, i) => {
                        return (
                          <SelectItem
                            key={symptom.id}
                            value={symptom.value}
                          >
                            {symptom.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ---------------FORM SYMPTOM 5 --------------- */}

            <FormField
              control={form.control}
              name='symptom5'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Symptom #5</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='(Optional) Select a symptom' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {uniqueSymptoms.map((symptom, i) => {
                        return (
                          <SelectItem
                            key={symptom.id}
                            value={symptom.value}
                          >
                            {symptom.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* ---------------FORM SUBMIT BUTTON--------------- */}

          <Button
            type='submit'
            className='w-full'
            disabled={pending}
          >
            {/* {loading ? "Loading..." : "Submit"} */}
            Submit
          </Button>
        </form>
      </Form>
      <div className='mt-8'>
        <h1 className='text-2xl font-semibold'>Result:</h1>
        {loading && <Skeleton className='w-full h-[40px] mt-4 rounded-full' />}
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
    </div>
  );
};

export default SymptomForm;
