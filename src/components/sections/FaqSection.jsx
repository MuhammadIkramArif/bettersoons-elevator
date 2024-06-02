import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Container from "../ui/Container";

const faqs = [
  {
    question: "To what extent can Doctolib be used for my facility?",
    answer:
      "Doctolib can be adapted to the size of any facility (practice, MVZ, clinic). Our 229,000 doctors and therapists in Germany use Doctolib in different specialist areas.",
  },
  {
    question:
      "What do we do to guarantee the highest level of data protection?",
    answer:
      "Only you and your patients have access to confidential health data. The personal health data of your patients is stored by so-called “health data hosting providers” who are certified according to a multi-stage and legally regulated process.",
  },
  {
    question: "How do you set up Doctolib in your practice?",
    answer:
      "The free setup and training takes place in 2 hours and includes personal advice and adjustment to the individual needs of your practice.",
  },
  {
    question: "Why do healthcare professionals love Doctolib?",
    answer:
      "We developed our software together with medical professionals. The operation is simple and user-friendly. This relieves the burden on everyday work, increases the quality of work and creates more time for treating patients.",
  },
  {
    question: "How much does Doctolib cost?",
    answer:
      "Doctolib costs EUR 139 per month for medical practices and EUR 129 per month for therapy practices (including VAT per month per health professional, excluding non-treating assistants).",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-white py-10">
      <Container>
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-center text-2xl lg:text-4xl font-bold mb-8"
        >
          Frequently asked questions
        </h1>
        <div
          className="mx-auto max-w-4xl divide-y divide-gray-900/10"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 active:scale-100">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
