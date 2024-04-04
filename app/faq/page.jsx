import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordian";
export default function Faq() {
  const faqList = [
    {
      question: "How does RoboCare work?",
      ans: "User is given an option to enter up to 5 symptoms, with 3 being the minimum requirement. Upon generating results, our ML algorithms generate probabilities for various possible diseases for the given symptoms.",
    },
    {
      question: "What data does RoboCare use to generate results?",
      ans: "Robocare makes use of a database consisting of symptoms of over 4000 diagnosed patients.",
    },
    {
      question: "How accurate are the predictions provided by the symptom checker?",
      ans: "Although we recommend consulting a medical professional if the symptoms are severe, we have still been able to achieve an accuracy of 91% by training our model repeatedly over a large database of diagnosed patients.",
    },
    {
      question: "What do the probabilities associated with each disease mean?",
      ans: "This is the likelihood of having the given disease.",
    },
    {
      question: "What should I do if I disagree with the results provided by RoboCare?",
      ans: "You can click on the thumbs down button to show that you are unsatisfied with our results and we recommend that you seek medical advice from a certified professional to get more information about your symptoms.",
    },
    {
      question: "How frequently is the data used by RoboCare updated?",
      ans: "Every time a user is satisfied with their results and they click on the thumbs up button providing positive feedback, that set data gets updated in our original database.",
    },
    {
      question: "How do I input my symptoms into the symptom checker?",
      ans: "Using the given drop down you can select your symptoms from a wide range of over 100 options.",
    },
    {
      question: "Can I use RoboCare on mobile devices?",
      ans: "Yes, RoboCare can be accessed on mobile devices through the world wide web.",
    },
    {
      question: "Can I use RoboCare for someone else, like a family member or friend?",
      ans: "As long as you are aware of their symptoms, RoboCare can be used by other individuals such as a family member or a friend.",
    },
    {
      question: "What measures are in place to ensure user privacy and confidentiality?",
      ans: "We have made it so that a user must have to sign up with their Google account in order to make use of robocare’s facilities. We have also implemented protected routing and other state-of-the-art security measures to ensure our users' data is protected.",
    },
  ];

  return (
    <div className='flex flex-col space-y-8 p-8 md:p-24'>
      <p className='text-5xl md:text-7xl font-oswald'>Frequently Asked Questions</p>

      <div className=''>
        <Accordion
          type='multiple'
          collapsible
          className='w-full'
        >
          {faqList.map(({ question, ans }, i) => {
            return (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className='py-2'
              >
                <AccordionTrigger className='text-start font-semibold text-xl hover:text-neutral-600'>
                  <p>
                    {/* <span className='text-blue-600'>Q{i + 1} </span> */}
                    {question}
                  </p>
                </AccordionTrigger>
                <AccordionContent className=' text-neutral-700 text-lg'>
                  <p>
                    {/* <span className='text-blue-600'>Ans: </span> */}
                    {ans}
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
