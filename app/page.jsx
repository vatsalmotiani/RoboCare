import SymptomForm from "@/components/symptom-form";
import { Separator } from "@radix-ui/react-select";

export default function Home() {
  return (
    <div className='flex flex-col justify-center '>
      <p className='text-4xl font-semibold text-center text-white'>Speed Scan</p>
      <p className='text-neutral-500 text-center text-lg mt-4 mb-8'>Select at least three symptoms to get started</p>
      {/* <Separator className='my-4' /> */}
      <SymptomForm />
    </div>
  );
}
