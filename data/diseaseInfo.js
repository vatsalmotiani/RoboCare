const disease_info = [
  {
    id: 0,
    name: "Fungal Infection",
    description: "It is any disease caused by a fungus. A fungus that invades the tissue can cause a disease that's confined to the skin, spreads into tissue, bones and organs or affects the whole body.",
    cause: "Fungal infections are caused by hundreds of fungi that live in the environment, or weakend immune system.",
    cure: ["Antifungal medications", "Vitamin C tablets"],
  },
  {
    id: 1,
    name: "Allergy",
    description: "You get allergies when your immune system responds to substances such as pollen, pet dander, or certain foods. Your antibodies identify these allergens as bad for you, even though they're not.",
    cause: "Allergic reactions happen when you come into contact with an allergen. Your immune system reacts by releasing histamines and other chemicals into your blood, causing symptoms that can irritate your skin, sinuses, or digestive system.",
    cure: ["Avoid the allergens if you can", "Consider allergy shots (immunotherapy)"],
  },
  {
    id: 2,
    name: "GERD",
    description: "Gastroesophageal reflux disease, or GERD, is a digestive disorder that affects the ring of muscle between your esophagus and your stomach. If you have it, you may get heartburn or acid indigestion.",
    cause: "Gastroesophageal reflux happens when the lower esophageal sphincter (LES) is weak or relaxes when it shouldn’t. This lets the stomach's contents flow up into the esophagus.",
    cure: ["Antacids", "H2 blockers"],
  },
  {
    id: 3,
    name: "Chronic Cholestasis",
    description: "Chronic cholestasis is a condition in which the liver and bile ducts are unable to excrete or transport bile to the duodenum.",
    cause: "It's caused by chronic progressive cholestatic diseases such as primary biliary cholangitis (PBC) and primary sclerosing cholangitis.",
    cure: ["Cholestyramine", "Ursodeoxycholic acid"],
  },
  {
    id: 4,
    name: "Drug Reaction",
    description: "A drug reaction can be defined as an appreciably harmful or unpleasant reaction resulting from an intervention related to the use of a medicinal product.",
    cause: "A few common causes can be due to the Drug chemical properties or Drug molecular weight or Genetics.",
    cure: ["Antihistamines", "Intravenous immunoglobulin therapy"],
  },
  {
    id: 5,
    name: "Peptic Ulcer Disease",
    description: "A sore that develops on the lining of the oesophagus, stomach or small intestine. Ulcers occur when stomach acid damages the lining of the digestive tract.",
    cause: "Common causes include the bacteria H. Pylori and anti-inflammatory pain relievers including aspirin.",
    cure: ["Proton pump inhibitors (PPIs)", "Antibiotics"],
  },
  {
    id: 6,
    name: "AIDS",
    description: "AIDS, or acquired immunodeficiency syndrome, is the final stage of HIV infection. When the immune system is weakened by HIV, the body has a harder time fighting off infections, illnesses, and certain cancers.",
    cause: "The most common ways to get HIV are through anal or vaginal sex, or sharing needles, syringes, or other drug injection equipment.",
    cure: ["While there is no cure for HIV/AIDS, medications called antiretroviral therapy (ART) can control the virus and prevent complications."],
  },
  {
    id: 7,
    name: "Diabetes",
    description: "Diabetes is a chronic disease that occurs when the body doesn't produce enough insulin or can't use it properly, causing high levels of blood sugar (glucose).",
    cause: "There are various causes but some commonly noted ones are Obesity, Physicial Inactivity, Advanced age, and Genetics.",
    cure: ["There is no cure for diabetes, but there are many treatments that can help manage symptoms like Immunotherapy and Lifestyle changes."],
  },
  {
    id: 8,
    name: "Gastroenteritis",
    description: "When you have diarrhea and vomiting, you may say you have the stomach flu. These symptoms often are due to a condition called gastroenteritis.",
    cause: "The cause is typically a viral or bacterial infection.",
    cure: ["Prevent dehydration", "Avoid dairy, caffeine, and alcohol until recovery is complete"],
  },
  {
    id: 9,
    name: "Bronchial Asthma",
    description: "When people talk about bronchial asthma, they are really talking about asthma, a chronic inflammatory disease of the airways that causes periodic attacks of coughing, wheezing, shortness of breath, and chest tightness.",
    cause: "Bronchial asthma is likely caused by a combination of environmental and inherited factors like Environmental allergens, Infections, and Family history",
    cure: ["While there is no cure for bronchial asthma, it can be managed with treatments like Terbutaline, Allergy shots, and using an Inhaler"],
  },
  {
    id: 10,
    name: "Hypertension",
    description: "Hypertension, also known as high blood pressure, is a condition where blood pressure in the arteries is consistently high. Hypertension is common and can be serious if left untreated.",
    cause: "Hypertension can be caused by unhealthy lifestyle choices which include a diet high in saturated and trans fat, Tobacco and alcohol, and Stress.",
    cure: ["There is no cure for hypertension but lifestyle changes and medications can help control it"],
  },
  {
    id: 11,
    name: "Migraine",
    description: "Migraine is a brain and nervous system disorder whose symptoms almost always include intense headaches. You get these headaches repeatedly, in episodes that can last anywhere from 4 to 72 hours.",
    cause: "Doctors don’t know exactly what causes migraines, though they seem to be related to your genes, as well as to changes in your brain.",
    cure: ["Painkiller", "Temperature therapy"],
  },
  {
    id: 12,
    name: "Cervical Spondylosis",
    description: "It is a condition involving changes to the bones, disks, and joints of the neck, usually as people age. Cervical spondylosis most often causes neck pain and stiffness.",
    cause: "Cervical spondylosis is generally a problem that comes with age, from wear and tear on the neck.",
    cure: ["Wearing a cervical collar to limit movement and provide support", "Heat and cold therapy or exercise"],
  },
  {
    id: 13,
    name: "Paralysis (brain hemorrhage)",
    description: "Brain hemorrhage can cause facial paralysis, as well as weakness, numbness, and tingling in the arm or leg on one side of the body.",
    cause: "Head trauma, Blood vessel abnormalities, and Brain tumor can be some of the causes for this condition.",
    cure: ["Surgery", "Medication"],
  },
  {
    id: 14,
    name: "Jaundice",
    description: "Jaundice is a yellow or greenish discoloration of the skin, mucus membranes, eyes, or other body tissues.",
    cause: "It occurs when there's too much bilirubin in the body, which can be due to increased production or impaired excretion.",
    cure: ["In adults, jaundice itself usually isn’t treated. But your doctor will treat the condition that’s causing it."],
  },
  {
    id: 15,
    name: "Malaria",
    description: "Malaria is a life-threatening disease caused by a parasite that infects mosquitoes and is spread to humans through their bites.",
    cause: "It is caused by the Plasmodium parasite, which is spread to humans through the bites of infected mosquitoes.",
    cure: ["Anti-malarial drugs", "Artemether (AM)"],
  },
  {
    id: 16,
    name: "Chickenpox",
    description: "Chickenpox results in an itchy, blister-like rash that first appears on the chest, back, and face, and then spreads over the entire body.",
    cause: "It is a highly contagious disease caused by the varicella-zoster virus (VZV), a member of the herpesvirus family.",
    cure: ["Chickenpox doesn't have a cure but to calm the itching one can use Antihistamines and Calamine lotion"],
  },
  {
    id: 17,
    name: "Dengue",
    description: "Dengue (pronounced DENgee) fever is a painful, debilitating mosquito-borne disease.",
    cause: "It caused by any one of four closely related dengue viruses. These viruses are related to the viruses that cause West Nile infection and yellow fever.",
    cure: ["There is no specific medicine to treat dengue infection. If you think you may have dengue fever, you should use pain relievers with acetaminophen and avoid medicines with aspirin."],
  },
  {
    id: 18,
    name: "Typhoid",
    description: "Typhoid fever (also called enteric fever) is a serious illness caused by infection with the Salmonella enterica serotype Typhi bacteria.",
    cause: "The bacteria is usually spread through contaminated food or water, and can also spread through person-to-person contact.",
    cure: ["Fluoroquinolones, such as ciprofloxacin (Cipro)", "Cephalosporins, which prevent bacteria from building cell walls"],
  },
  {
    id: 19,
    name: "Hepatitis A",
    description: "Hepatitis A, also called hep A, is a contagious liver infection caused by the hepatitis A virus. Some people have only a mild illness that lasts a few weeks.",
    cause: "Person to person contact or comsumption of contaminated food or drink.",
    cure: ["Try to keep food down", "Avoid alcohol"],
  },

  {
    id: 20,
    name: "Hepatitis B",
    description: "Hepatitis B is an infection of the liver caused by the hepatitis B virus. The infection can be acute (short and severe) or chronic (long term).",
    cause: "The virus that causes hepatitis B lives in blood, semen, and other fluids in your body. You usually get it by having sex with someone who's infected.",
    cure: ["Antiviral medication for hepatitis B includes adefovir (Hepsera), entecavir (Baraclude), interferon, lamivudine (Epivir)", "Avoid alcohol", "Monitor liver health"],
  },

  {
    id: 21,
    name: "Hepatitis C",
    description: "Hepatitis C is a viral infection that primarily affects the liver, often leading to chronic liver disease, but can be cured with modern antiviral treatments.",
    cause: "Hepatitis C spreads when blood or body fluids contaminated with the hepatitis C virus get into your bloodstream through contact with an infected person.",
    cure: ["Antiviral medications, including sofosbuvir and daclatasvir"],
  },

  {
    id: 22,
    name: "Hepatitis D",
    description: "Hepatitis D is a liver infection you can get if you have hepatitis B. It can cause serious symptoms that can lead to lifelong liver damage and even death. It’s sometimes called hepatitis delta virus (HDV) or delta hepatitis.",
    cause: "Occurs in people who are already infected with the hepatitis B virus (HBV) as HDV requires the HBV envelope proteins to replicate. Transmission typically occurs through contact with infected blood or bodily fluids, sharing needles, or sexual contact.",
    cure: ["If you have HDV, you may need to see a doctor who works with diseases of the digestive tract, including the liver, such as a gastroenterologist. There’s no cure yet for HDV. Until doctors come up with better options, the drug prescribed most often is pegylated interferon alfa (peg-IFNa)."],
  },

  {
    id: 23,
    name: "Hepatitis E",
    description: "Hepatitis E is a virus that infects your liver. It can cause your liver to swell up.",
    cause: "The hepatitis E virus spreads through poop. You can catch it if you drink or eat something that has been in contact with the stool of someone who has the virus. ",
    cure: ["In most cases, hepatitis E goes away on its own in about 4-6 weeks. Make sure to get ample rest, eat healthy food and avoid alcohol"],
  },

  {
    id: 24,
    name: "Alcoholic Hepatitis",
    description: "It is a serious condition that affects people who are, or used to be, heavy drinkers. It can cause short- or long-term liver damage.",
    cause: "Heavy alcohol use or binge drinking",
    cure: ["Antibiotics", "Stop alcohol consumption", "Steroids"],
  },

  {
    id: 25,
    name: "Tuberculosis",
    description: "Tuberculosis (TB) is a contagious infection that usually attacks your lungs. It can also spread to other parts of your body, like your brain and spine. ",
    cause: "Tuberculosis bacteria spread through the air, just like a cold or the flu. You can get TB only if you come into contact with people who have it.",
    cure: ["Most cases are cured with antibiotics. But it takes a long time. You have to take medications for at least 6 to 9 months."],
  },

  {
    id: 26,
    name: "Common Cold",
    description: "The common cold is a viral infection primarily affecting the upper respiratory tract, characterized by symptoms like a runny or stuffy nose, coughing, sneezing, sore throat, and sometimes fever.",
    cause: "The common cold is primarily caused by rhinoviruses, though other viruses such as coronaviruses, adenoviruses, and respiratory syncytial virus (RSV) can also contribute to its onset. These viruses are highly contagious and spread through respiratory droplets when an infected person coughs, sneezes, or talks.",
    cure: ["Rest", "Hydration", "Pain relievers (e.g., acetaminophen, ibuprofen) can alleviate fever and discomfort"],
  },

  {
    id: 27,
    name: "Pneumonia",
    description: "Pneumonia is the infection and inflammation of air sacs in your lungs. These air sacs, called alveoli, can fill with fluid or pus, causing a serious cough and fever. ",
    cause: "Flu viruses, Cold viruses, RSV virus",
    cure: ["Your doctor can tell you which treatment is right for you", "Bacterial pneumonia is treated using antibiotics", " For viral pneumonia, rest, drink a lot of fluids, and take medicine for your fever."],
  },

  {
    id: 28,
    name: "Dimorphic Hemmorhoids (piles)",
    description: "Piles, also known as hemorrhoids, are swollen and inflamed veins in the rectum and anus, causing discomfort, itching, and sometimes bleeding during bowel movements. They can result from increased pressure in the lower rectum due to factors like straining during bowel movements, chronic constipation, or pregnancy.",
    cause: "Straining during bowel movements, chronic constipation, diarrhea, sitting for prolonged periods, obesity, pregnancy, and a low-fiber diet. ",
    cure: ["Drink lots of water", "Paracetamol if piles hurt", "Keep your bottom clean and dry", "Exercise regularly"],
  },

  {
    id: 29,
    name: "Heart Attack",
    description: "A heart attack happens when something blocks the blood flow to your heart so it can’t get the oxygen it needs. It’s a medical emergency. ",
    cause: "When your blood supply is blocked, you have a heart attack. Fat, calcium, proteins, and inflammatory cells build up in your arteries to form plaques. These plaque deposits are hard on the outside and soft and mushy on the inside.",
    cure: [
      " The best time to treat a heart attack is within 1 or 2 hours after heart attack symptoms begin. Waiting longer means more damage to your heart and a lower chance of living longer. If you’ve called emergency services and are waiting for them to arrive, chew an aspirin (325 mg). Aspirin is a potent inhibitor of blood clots and can lower your chance of death from a heart attack by 25%.",
    ],
  },

  {
    id: 30,
    name: "Varicose Veins",
    description: "Varicose veins are enlarged, twisted veins, usually occurring in the legs, caused by weakened valves and increased pressure in the veins. ",
    cause: "Varicose veins commonly develop due to weakened or damaged valves in the veins, which disrupt the normal flow of blood. Contributing factors include genetics, aging, prolonged standing or sitting, obesity, pregnancy, and hormonal changes such as during puberty or menopause.",
    cure: ["Lifestyle changes including regular exercise", "Compression stockings to improve bloodflow", "Endovenous laser treatment (EVLT)"],
  },

  {
    id: 31,
    name: "Hypothyroidism",
    description: "Hypothyroidism is a thyroid disorder characterized by an underactive thyroid gland, leading to insufficient production of thyroid hormones.",
    cause: "Autoimmune disease called Hashimoto's disease, Iodine deficiency",
    cure: ["The most common treatment is levothyroxine (Levoxyl, Synthroid, Tirosint, Unithroid, Unithroid Direct), a man-made version of the thyroid hormone thyroxine (T4)"],
  },

  {
    id: 32,
    name: "Hyperthyroidism",
    description: "Hyperthyroidism is a thyroid disorder characterized by an overactive thyroid gland, resulting in excessive production of thyroid hormones.",
    cause: "Graves’ disease. This immune system disorder is the most common cause of hyperthyroidism (70% of cases). Normally, the antibodies in your blood go after bacteria, but if you have Graves’ disease, the antibodies turn on your thyroid instead.",
    cure: ["Beta blockers", "Antithyroid drugs"],
  },

  {
    id: 33,
    name: "Hypoglycemia",
    description: "Hypoglycemia is a condition caused by low blood glucose (blood sugar)",
    cause: "Main cause is low blood sugar",
    cure: ["Avoid snacks that contain a lot of fat", "Glucagon treatment", "Keep monitoring blood sugar levels"],
  },

  {
    id: 34,
    name: "Osteoarthritis",
    description: "Osteoarthritis is a degenerative joint disease characterized by the breakdown of cartilage and bone in the joints, leading to pain, stiffness, and reduced mobility.",
    cause: "Osteoarthritis is primarily caused by the gradual breakdown of cartilage in the joints over time, leading to pain and stiffness. Risk factors include aging, joint overuse or injury, genetics, obesity, and certain metabolic disorders.",
    cure: ["Anti-inflammatory drugs (NSAIDs), such as ibuprofen (Advil, Motrin IB, others) and naproxen sodium (Aleve)", "Exercise"],
  },

  {
    id: 35,
    name: "Arthritis",
    description: "The word arthritis means joint inflammation. Inflammation is one of your body's natural reactions to disease or injury. It includes swelling, pain, and stiffness. Inflammation that lasts a very long time or comes back, as in arthritis, can lead to tissue damage.",
    cause: "Age, Genetics, Infection, Injuries",
    cure: ["Exercise", "Physical therapy", "Drugs"],
  },

  {
    id: 36,
    name: "Vertigo",
    description: "Vertigo is a sensation of feeling off balance. If you have these dizzy spells, you might feel like you are spinning or that the world around you is spinning.",
    cause: "Meniere's Disease, labyrinthitis",
    cure: ["In many cases, vertigo goes away without any treatment. This is because your brain is able to adapt, at least in part, to the inner ear changes, relying on other mechanisms to maintain balance.", "Vestibular rehabilitation"],
  },

  {
    id: 37,
    name: "Acne",
    description: "Acne is a common skin condition characterized by the formation of pimples, blackheads, whiteheads, and cysts due to the clogging of hair follicles with oil and dead skin cells. ",
    cause: "Excess oil production, clogged hair follicles, bacteria, hormonal changes, certain medications, diet, and genetics.",
    cure: ["Over-the-counter creams", "Prescription antibiotics", "Cleansers"],
  },

  {
    id: 38,
    name: "Urinary Tract Infection",
    description: "A urinary tract infection (UTI) is a bacterial infection affecting the urinary system, commonly characterized by symptoms such as frequent urination, burning sensation during urination, cloudy or foul-smelling urine, and pelvic pain.",
    cause: "Improper wiping after bowel movements, sexual activity, urinary catheterization, or conditions that obstruct the flow of urine, such as kidney stones.",
    cure: ["Avoid diuretics and irritants", "Hydrate", "Keep genital area clean", "Antibiotics"],
  },

  {
    id: 39,
    name: "Psoriasis",
    description: "Psoriasis is a chronic autoimmune skin condition characterized by the rapid buildup of skin cells, resulting in red, scaly patches that may itch, burn, or bleed.",
    cause: "Stress, skin injury, tobacco use, weather conditions",
    cure: ["Topical ointments", "Light therapy"],
  },

  {
    id: 40,
    name: "Impetigo",
    description: "Impetigo is a common bacterial skin infection that spreads easily. It causes itchy sores or blisters to form on exposed skin, commonly around the nose or mouth. ",
    cause: "Bacteria called Staphylococcus aureus, Easy to pickup if there is an open wound of fresh scratch",
    cure: ["Impetigo cream", "Wash infected area and cover with bandage after appyling cream"],
  },
];

export const findDisease = (disease) => {
  const foundDisease = disease_info.find((entry) => entry.name === disease);
  if (foundDisease) {
    return foundDisease;
  }
  return null; // Return null or handle a case when no match is found
};
