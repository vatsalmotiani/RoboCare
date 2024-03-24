import SymptomForm from "@/components/symptom-form";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <div className='gap-y-4 flex flex-col mb-12'>
        <p className='text-4xl font-semibold text-center text-white'>Speed Scan</p>
        <p className='text-neutral-500 text-center text-lg '>Select at least three symptoms to get started</p>
      </div>
      {/* <Separator className='my-8 border-1 bg-neutral-600' /> */}
      <SymptomForm />
    </div>
  );
}
