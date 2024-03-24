import SymptomForm from "@/components/symptom-form";

export default function Home() {
  return (
    <div className='flex flex-col justify-center'>
      <p className='text-4xl font-semibold text-white'>Speed Scan Now</p>
      <p className='text-neutral-500 text-lg mt-4 mb-8'>Select at least three symptoms to uncover potential health condition using our predictor</p>
      <SymptomForm />
    </div>
  );
}
