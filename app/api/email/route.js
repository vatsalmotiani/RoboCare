import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { percentages } = await request.json();

    const percentagesArray = Object.entries(percentages) // Or use the for loop approach
      .map(([disease, percentage]) => ({ disease, percentage }))
      .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));

    console.log("percentages:", percentagesArray);
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["robocare24@gmail.com"],
      subject: "Hello world",
      react: <WelcomeEmail percentages={percentagesArray} />,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
