import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["robocare24@gmail.com"],
      subject: "Hello world",
      // react: EmailTemplate({ firstName: 'John' }),
      react: <WelcomeEmail />,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
