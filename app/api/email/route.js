import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { diseaseData, firstName, email } = await request.json();
    const data = await resend.emails.send({
      from: "RoboCare <onboarding@resend.dev>",
      to: ["robocare24@gmail.com", email],
      // to: recepients,
      subject: `${firstName}'s Test Results`,
      react: (
        <WelcomeEmail
          firstName={firstName}
          email={email}
          diseaseData={diseaseData}
        />
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
