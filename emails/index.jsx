import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text, Tailwind, Heading } from "@react-email/components";
import * as React from "react";
import "../app/globals.css";
import { Info } from "lucide-react";

// const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const baseUrl = "http://localhost:3000";

const dummyEmail = [
  { disease: "Cervical Spondylosis", percentage: "11.11111111111111" },
  { disease: "Cervical", percentage: "21.11111111111111" },
];
export const WelcomeEmail = ({ firstName, percentages }) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            caveat: ["Caveat", "cursive"],
            noto: ["Noto Sans", "sans-serif"],
            inter: ["Inter", "sans-serif"],
            bebas: ["Bebas Neue", "sans-serif"],
            oswald: ["Oswald", "sans-serif"],
            imbue: ["Imbue", "serif"],
            alumni: ["Alumni Sans", "sans-serif"],
          },
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head>
        {/* <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap'
          rel='stylesheet'
        /> */}
      </Head>
      <Preview>Click here to see results</Preview>
      <Body style={main}>
        <Container
          style={container}
          className='p-6'
        >
          <p className='text-3xl  text-neutral-900 font-semibold'>
            Robo<span className='text-blue-600'>Care</span>
          </p>
          <Text style={paragraph}>Hi {firstName},</Text>
          <p className='leading-normal'>Thank you for participating in the RoboCare Health Assessment. Your commitment to understanding your health status is commendable, and we are pleased to provide you with your test results. </p>
          <p className='leading-normal'>Here is a breakdown of your test results:</p>
          <div className='flex flex-col'>
            {percentages.map(({ disease, percentage }, i) => (
              <div
                key={i}
                className='font-bold flex items-center '
              >
                <p className='font-medium me-4'>{i + 1}.</p>
                <p className='font-bold me-2'>{disease}</p>
                <p className='text-blue-600 me-2'>{Math.floor(percentage)}%</p>
                {percentage >= 75 && percentage <= 100 && <p className='font-medium text-neutral-400'>(Strong chance)</p>}
              </div>
            ))}
          </div>

          <p style={paragraph}>If you wish to take another test, click the button below.</p>

          <Button
            className='bg-blue-600 rounded-lg w-full px-3 py-4 font-medium leading-4 text-center text-white'
            href='https://vatsalmotiani.com'
          >
            Take Another Test
          </Button>

          <Text style={paragraph}>
            Best,
            <br />
            RoboCare Health Assessment Team
          </Text>
          <Hr style={hr} />
          {/* <Text style={footer}>RoboCare - Est. 2023</Text> */}
          <p className='flex text-sm leading-normal text-neutral-400 gap-x-2 '>The information provided here is for informational purposes only and should not be construed as medical advice. Please consult a doctor for any medical concerns. For immediate medical assistance in India, call the national helpline number: 104.</p>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

WelcomeEmail.PreviewProps = {
  userFirstname: "Alan",
};

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
