import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components";
import * as React from "react";

// const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const baseUrl = "http://localhost:3000";

const dummyEmail = [
  { disease: "Cervical Spondylosis", percentage: "11.11111111111111" },
  { disease: "Cervical", percentage: "21.11111111111111" },
];
export const WelcomeEmail = ({ firstName, percentages }) => (
  <Html>
    <Head />
    <Preview>Click here to see results</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi {firstName},</Text>
        <Text style={paragraph}>Here are your RoboCare Results:</Text>
        {percentages.map(({ disease, percentage }, i) => (
          <Text
            key={i}
            style={paragraph}
          >
            {disease} - {percentage}
          </Text>
        ))}

        <Section style={btnContainer}>
          <Button
            style={button}
            href='https://vatsalmotiani.com'
          >
            Check up
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The RoboCare team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>470 Noor Ave STE B #1148, South San Francisco, CA 94080</Text>
      </Container>
    </Body>
  </Html>
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
