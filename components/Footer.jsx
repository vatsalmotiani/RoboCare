import { Info } from "lucide-react";
import { Separator } from "../components/ui/separator";

export default function Footer() {
  return (
    <div>
      <Separator />
      <p className='mt-8 flex text-neutral-400 gap-x-2 bottom-0'>
        <Info /> The information provided here is for informational purposes only and should not be construed as medical advice. Please consult a doctor for any medical concerns. For immediate medical assistance in India, call the national helpline number: 104.
      </p>
    </div>
  );
}
