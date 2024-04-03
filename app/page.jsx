import Image from "next/image";
import { SignIn } from "@clerk/nextjs";
import { Separator } from "../components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

import Link from "next/link";
import { Button } from "../components/ui/button";

export default function page() {
  const BuiltUsing = () => {
    return (
      <div className='flex flex-col items-center space-y-4'>
        <p className='text-neutral-400'>Built Using</p>
        <div className='flex space-x-8'>
          <p>Python</p>
          <p>Next.js</p>
        </div>
      </div>
    );
  };
  const Landing = () => {
    return (
      <div className='flex flex-col space-y-8 p-8 md:p-24'>
        <Image
          src='/flower.svg'
          height={60}
          width={60}
          alt='flower'
        />
        <p className='text-neutral-900 md:leading-normal leading-normal text-4xl md:text-7xl text-wrap font-oswald'>
          Empowering informed health decisions with <span className='text-blue-600'>ML-driven</span> symptom analysis.
        </p>
        <p className='text-md text-neutral-400 leading-relaxed '>
          Empowering you with knowledge about your health is our mission at RoboCare. With our intuitive symptom checker, you can quickly and conveniently input your symptoms and receive an instant analysis of potential diseases or conditions. Whether you are experiencing common ailments or more complex conditions, our symptom checker is designed to help you understand your health better.
        </p>
        {/* <Separator /> */}
        <Link href='/checkup'>
          <Button className='w-full p-8 text-md rounded-xl bg-blue-600 hover:bg-blue-800 text-white gap-2 '>Get Started</Button>
        </Link>
      </div>
    );
  };
  const About = () => {
    return (
      <div className='bg-blue-100'>
        <div className='flex flex-col space-y-8 p-8 md:p-24'>
          <p className='text-4xl font-oswald text-neutral-800'>About RoboCare</p>
          <p className='text-md text-neutral-500 leading-relaxed'>
            Robocare is a user-friendly self-service symptom checker designed for individuals seeking insights into their symptoms and common treatment methods. It empowers users to understand their ailments better. With an intuitive interface, Robocare offers accessible and informative guidance on various health concerns. It aims to enhance individuals&apos; health literacy and promote informed
            decision-making regarding their well-being.
          </p>
          <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-12 flex-wrap'>
            {aboutCards.map((card) => {
              return (
                <Card
                  key={card.header_number}
                  className='lg:w-[30%] me-auto w-full  rounded-2xl p-4 leading-normal'
                >
                  <CardHeader>
                    <CardTitle className=''>{card.header}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{card.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const aboutCards = [
    {
      header_number: 1,
      header: "Database Overview",
      body: "Containing data on over 4000 patients and diagnoses of more than 40 diseases, this database serves as a comprehensive repository for medical analysis.",
    },
    {
      header_number: 2,
      header: "Patient Information",
      body: "Patient profiles within the database offer detailed information on diagnoses, enabling thorough medical research and analysis.",
    },
    {
      header_number: 3,
      header: "Machine Learning Precision",
      body: "Utilizing advanced machine learning, this database ensures accurate results, enhancing the reliability of medical analysis.",
    },
  ];

  return (
    <div className='flex flex-col space-y-16'>
      <Landing />
      <About />

      {/* <BuiltUsing /> */}
    </div>
  );
}
