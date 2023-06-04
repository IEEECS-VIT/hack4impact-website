import React, { useState } from 'react';
import '../faq/faq.css';
import FAQ from '../faq/faq';

export default function Content() {
  const [faqs, setFaqs] = useState([
    {
      question: 'Is there a registration fee to participate in Hack4Impact?',
      answer: 'This event is absolutely FREE for everyone.',
      open: false,
    },
    {
      question: 'What kind of problem statements can we expect?',
      answer:
        "All problem statements will be based on SDG's 4th goal i.e. Quality Education which aims at ensuring inclusive and equitable quality education as well as promoting lifelong learning opportunities for all.",
      open: false,
    },
    {
      question: 'Who can participate in this hack?',
      answer: 'Students from all years are welcome.',
      open: false,
    },
    {
      question: 'How many members can constitute a team?',
      answer:
        'There should be a minimum of 2 members and can be up to 4 members in a team.',
    },
    {
      question: 'How will this hack help me?',
      answer:
        'This is a great opportunity for learning, overcoming challenges, collaborating with the community, networking and winning SWAGs.',
    },
    {
      question: 'Are there any prerequisites?',
      answer:
        'While coding experience is a huge plus, strong presentation skills and out of the box ideas are also great complementary attributes that help make up a well balanced team.',
    },
    {
      question: 'Will there be refreshments?',
      answer:
        'Absolutely, delicious food and beverages will be providede throughout the event.',
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div id='faq'>
      <div class='heading'>
        Frequently Asked <span class='point'>Questions</span>
      </div>
      <hr class='line-faq' />
      <div className='section'>
        <div className='faqs'>
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
}
