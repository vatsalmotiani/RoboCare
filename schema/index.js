import * as z from "zod";
import { uniqueSymptomsList, symptomsList } from "@/data/symptomsList";

export const SymptomsSchema = z.object({
  // email: z.string().email({
  //   message: "Please enter a valid email address",
  // }),
  // name: z.string().min(1, {
  //   message: "Please enter a valid name",
  // }),
  symptom1: z.nativeEnum(uniqueSymptomsList, {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return { message: "Please select a symptom" };
      }
      return { message: issue.message ?? "" };
    },
  }),
  symptom2: z.nativeEnum(uniqueSymptomsList, {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return { message: "Please select a symptom" };
      }
      return { message: issue.message ?? "" };
    },
  }),
  symptom3: z.nativeEnum(uniqueSymptomsList, {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return { message: "Please select a symptom" };
      }
      return { message: issue.message ?? "" };
    },
  }),
  symptom4: z.nativeEnum(uniqueSymptomsList).optional(),
  symptom5: z.nativeEnum(uniqueSymptomsList).optional(),
});
