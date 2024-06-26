"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { SymptomsSchema } from "../schema/index";
import { uniqueSymptoms } from "../data/symptomsList";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { SearchCheck, Sparkle, ChevronsUpDown } from "lucide-react";

// import { cn } from "../lib/utils";
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./ui/command";
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

// import { Label } from "./ui/label";
// import { Checkbox } from "../components/ui/checkbox";

const SymptomForm = ({ setResponseData, setLoading, setErrorStatus }) => {
  const form = useForm({
    resolver: zodResolver(SymptomsSchema),
    defaultValues: {
      symptom1: "",
      symptom2: "",
      symptom3: "",
    },
  });

  //----------------------------------------------------FORM ON SUBMIT FUNCTION --------------------------------------------------------

  const onSubmit = async (data) => {
    const { symptom1, symptom2, symptom3, symptom4, symptom5 } = data; // EXTRACTING DATA
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
        setErrorStatus(false);
        setResponseData(responseData);
        console.log("Result:", responseData);
      } else {
        console.error("Failed to fetch:", response.status);
        setErrorStatus(true);
      }
    } catch (error) {
      //---------------CATCH BLOCK FOR ERRORS ---------------
      console.error("Error:", error);
      setErrorStatus(true);
    } finally {
      setLoading(false);
    }
  };

  const { pending } = useFormStatus();

  return (
    <div className='w-full'>
      {/* -----------------------------------------------------FORM FRONTEND----------------------------------------------------- */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* ---------------FORM SYMPTOM 1 --------------- */}

            <FormField
              control={form.control}
              name='symptom1'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Symptom #1</FormLabel> */}
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className=' px-4 py-8 rounded-2xl text-md text-neutral-400'>
                      <SelectTrigger className='text-neutral-900 '>
                        <SelectValue placeholder='Select a symptom' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=' p-4 rounded-2xl text-md text-neutral-400'>
                      {uniqueSymptoms.map((symptom, i) => {
                        return (
                          <SelectItem
                            key={symptom.id}
                            value={symptom.value}
                            className='text-md  ps-2'
                          >
                            {symptom.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage className='ps-4' />
                </FormItem>
              )}
            />
            {/* ---------------FORM SYMPTOM 2 --------------- */}

            <FormField
              control={form.control}
              name='symptom2'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Symptom #2</FormLabel> */}
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className=' px-4 py-8 rounded-2xl text-md text-neutral-400 '>
                      <SelectTrigger className='text-neutral-900 '>
                        <SelectValue placeholder='Select a symptom' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=' p-4 rounded-2xl text-md text-neutral-400'>
                      {uniqueSymptoms.map((symptom, i) => {
                        return (
                          <SelectItem
                            key={symptom.id}
                            value={symptom.value}
                            className='text-md  ps-2'
                          >
                            {symptom.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage className='ps-4' />
                </FormItem>
              )}
            />
            {/* ---------------FORM SYMPTOM 3 --------------- */}

            <FormField
              control={form.control}
              name='symptom3'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Symptom #3</FormLabel> */}
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className=' px-4 py-8 rounded-2xl text-md text-neutral-400'>
                      <SelectTrigger className='text-neutral-900 '>
                        <SelectValue placeholder='Select a symptom' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=' p-4 rounded-2xl text-md text-neutral-400'>
                      {uniqueSymptoms.map((symptom, i) => {
                        return (
                          <SelectItem
                            key={symptom.id}
                            value={symptom.value}
                            className='text-md  ps-2'
                          >
                            {symptom.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage className='ps-4' />
                </FormItem>
              )}
            />
            {/* ---------------FORM SYMPTOM 4 --------------- */}

            <FormField
              control={form.control}
              name='symptom4'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Symptom #4</FormLabel> */}
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className=' px-4 py-8 rounded-2xl text-md text-neutral-400'>
                      <SelectTrigger className='text-neutral-900 '>
                        <SelectValue placeholder='(Optional) Select a symptom' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=' p-4 rounded-2xl text-md text-neutral-400'>
                      {uniqueSymptoms.map((symptom, i) => {
                        return (
                          <SelectItem
                            key={symptom.id}
                            value={symptom.value}
                            className='text-md  ps-2'
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
                  {/* <FormLabel>Symptom #5</FormLabel> */}
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className=' px-4 py-8 rounded-2xl text-md text-neutral-400'>
                      <SelectTrigger className='text-neutral-900 '>
                        <SelectValue placeholder='(Optional) Select a symptom' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=' p-4 rounded-2xl text-md text-neutral-400'>
                      {uniqueSymptoms.map((symptom, i) => {
                        return (
                          <SelectItem
                            key={symptom.id}
                            value={symptom.value}
                            className='text-md  ps-2'
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
          {/* <div className='flex gap-x-2 items-center text-neutral-900 '>
            <Checkbox
              id='terms'
              className='border-white border-3 ring-offset-white'
            />
            <Label htmlFor='terms'>I acknowledge that ....</Label>
          </div> */}
          {/* ---------------FORM SUBMIT BUTTON--------------- */}
          {/* 
          <Button
            type='submit'
            className='w-full p-8 text-md rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-purple-400 via-30% to-80% to-red-400 hover:from-indigo-600 hover:to-red-400 text-neutral-900 gap-2 '
            disabled={pending}
          > */}
          <Button
            type='submit'
            className='w-full p-8 text-lg rounded-xl bg-blue-600 hover:bg-blue-800 text-white gap-2 '
            disabled={pending}
          >
            {/* {loading ? "Loading..." : "Submit"} */}
            Get Results <Sparkle className='fill-current' />
          </Button>
        </form>
      </Form>
      {/* <div className='mt-8'>
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
      </div> */}
    </div>
  );
};

export default SymptomForm;
