export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are your nannies background verified?',
    answer: 'Yes, all our nannies undergo thorough background verification including police verification, ID proof validation, and reference checks. We ensure complete transparency and safety for your family.'
  },
  {
    id: 'faq-2',
    question: 'What if we\'re not satisfied with the nanny?',
    answer: 'We offer a 24-hour replacement guarantee. If you\'re not satisfied with the nanny for any reason, we will provide a replacement within 24 hours at no additional cost.'
  },
  {
    id: 'faq-3',
    question: 'Do nannies stay 24 hours or come daily?',
    answer: 'We offer both options. Our primary service is 24-hour live-in nannies who stay at your home. We also provide daily visit options based on your specific requirements.'
  },
  {
    id: 'faq-4',
    question: 'What is included in baby care service?',
    answer: 'Our comprehensive baby care includes feeding, bathing, diaper changing, sleep management, hygiene maintenance, playtime activities, and basic health monitoring. For newborns, we also provide night feed support and mother assistance.'
  },
  {
    id: 'faq-5',
    question: 'How quickly can you arrange a nanny?',
    answer: 'We can arrange a verified nanny within 24-48 hours of your request. For urgent requirements, we offer same-day placement subject to availability.'
  },
  {
    id: 'faq-6',
    question: 'What are your charges?',
    answer: 'Our charges vary based on the service type, baby\'s age, and specific requirements. Typically, rates range from ₹15,000-30,000 per month. Please contact us for a customized quote based on your needs.'
  },
  {
    id: 'faq-7',
    question: 'Are nannies trained in first aid?',
    answer: 'Yes, all our nannies receive training in baby safety and basic first aid. They are equipped to handle common emergencies and know when to seek immediate medical attention.'
  },
  {
    id: 'faq-8',
    question: 'Can we get a replacement nanny?',
    answer: 'Absolutely! We offer free replacement service anytime during the service period. If your nanny needs to leave or if you\'re not satisfied, we provide a replacement within 24 hours.'
  }
];
