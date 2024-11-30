import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I get started with Learnify?',
    answer: 'Getting started is easy! Simply create a free account, browse our course catalog, and enroll in any course that interests you. You can begin learning immediately after enrollment.'
  },
  {
    question: 'Are the certificates recognized by employers?',
    answer: 'Yes! Our certificates are industry-recognized and valued by employers. They validate your skills and knowledge in specific areas, making them a valuable addition to your resume.'
  },
  {
    question: 'Can I learn at my own pace?',
    answer: 'Absolutely! All our courses are self-paced, allowing you to learn whenever and wherever you want. You have lifetime access to the course content after enrollment.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and various local payment methods. We also offer secure payment processing to ensure your financial information is protected.'
  },
  {
    question: 'Do you offer refunds?',
    answer: "Yes, we offer a 30-day money-back guarantee for all courses. If you're not satisfied with your purchase, you can request a full refund within 30 days of enrollment."
  },
  {
    question: 'Can I download courses for offline viewing?',
    answer: 'Yes! Premium members can download course videos and materials for offline viewing through our mobile app, making it convenient to learn even without an internet connection.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-12 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="/contact" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}