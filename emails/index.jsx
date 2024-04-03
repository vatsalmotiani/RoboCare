import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text, Tailwind, Heading } from "@react-email/components";
import * as React from "react";
import "../app/globals.css";
import { Info } from "lucide-react";

// const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const baseUrl = "http://localhost:3000";

const dummyEmail = [
  {
    name: "Diabetes",
    percentage: 33.33333333333333,
    id: 7,
    description: "Diabetes is a chronic disease that occurs when the body doesn't produce enough insulin or can't use it properly, causing high levels of blood sugar (glucose).",
    cause: "There are various causes but some commonly noted ones are Obesity, Physicial Inactivity, Advanced age, and Genetics.",
    cure: ["hmm", "ok"],
  },
  {
    name: "Fungal Infection",
    percentage: 33.33333333333333,
    id: 0,
    description: "It is any disease caused by a fungus. A fungus that invades the tissue can cause a disease that's confined to the skin, spreads into tissue, bones and organs or affects the whole body.",
    cause: "Fungal infections are caused by hundreds of fungi that live in the environment, or weakend immune system.",
    cure: ["hmm", "ok"],
  },
  {
    name: "Hyperthyroidism",
    percentage: 33.33333333333333,
    id: 32,
    description: "Hyperthyroidism is a thyroid disorder characterized by an overactive thyroid gland, resulting in excessive production of thyroid hormones.",
    cause: "Graves disease. This immune system disorder is the most common cause of hyperthyroidism (70% of cases). Normally, the antibodies in your blood go after bacteria, but if you have Graves’ disease, the antibodies turn on your thyroid instead.",
    cure: ["hmm", "ok"],
  },
];

export const WelcomeEmail = ({ firstName, diseaseData, email }) => (
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
      <Preview>Your results are here!</Preview>
      <Body style={main}>
        <Container
          style={container}
          className='px-6 pt-6'
        >
          <p className='text-3xl  text-neutral-900 font-semibold'>
            Robo<span className='text-blue-600'>Care</span>
          </p>
          <p className='leading-normal text-md'>Hi {firstName},</p>
          <p className='leading-normal text-md'>Thank you for completing the RoboCare Health Assessment. Your dedication to understanding your health is admirable, and we are delighted to provide you with an overview of your assessment. </p>
          <p className='leading-normal text-md'>Below is a breakdown of your test outcomes:</p>
          <Hr style={hr} />

          <Container style={container2}>
            {diseaseData.map(({ name, percentage, description, cause, cure }, i) => (
              <Container
                style={container2}
                className=''
                key={i}
              >
                <div
                  style={{ marginBottom: "0px" }}
                  className='font-bold text-xl flex items-center'
                >
                  <p
                    style={{ marginRight: "16px" }}
                    className='font-medium me-4'
                  >
                    {i + 1}.
                  </p>
                  <p
                    style={{ marginRight: "16px" }}
                    className='font-bold me-2'
                  >
                    {name}
                  </p>
                  <p
                    style={{ marginRight: "16px" }}
                    className='text-blue-600 me-2'
                  >
                    {Math.floor(percentage)}%
                  </p>
                </div>

                <Container>
                  <p className=''>{description}</p>
                  <Container className=''>
                    <p className='font-semibold text-blue-600'>Cause</p>
                    <p>{cause}</p>
                  </Container>
                  <Container className=''>
                    <p className='font-semibold text-blue-600'>Treatment</p>
                    {cure.map((point, i) => {
                      return <p key={i}>- {point}</p>;
                    })}
                  </Container>
                </Container>
                <Hr style={hr} />
              </Container>
            ))}
          </Container>

          <p className='leading-normal'>If you wish to take another test, click the button below.</p>

          <Button
            className='bg-blue-600 rounded-lg w-full px-3 py-4 font-medium leading-4 text-center text-white'
            href='https://localhost:3000/checkup'
          >
            Take Another Test
          </Button>

          <Text>
            Best,
            <br />
            RoboCare Health Assessment Team
          </Text>
          <Hr style={hr} />
          {/* <Text style={footer}>RoboCare - Est. 2023</Text> */}
          <p className='flex leading-normal text-neutral-400 gap-x-2 '>The information provided here is for informational purposes only and should not be construed as medical advice. Please consult a doctor for any medical concerns. For immediate medical assistance in India, call the national helpline number: 104.</p>
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
  // padding: "20px 0 48px",
};

const container2 = {
  margin: "0 auto",
  padding: "0px 0px 0px 0",
};
const container3 = {
  margin: "0 auto",
  padding: "0px",
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
