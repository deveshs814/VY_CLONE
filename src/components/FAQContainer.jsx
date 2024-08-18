import React from 'react';
import FAQItem from './FAQItem';
import "./FAQ.css"

const FAQ = () => {
    
  const faqs = [
    {
      question: 'What’s the validity of membership?',
      answer: 'Annual Membership: 12 Months, apply to multiple opportunities & travel all year.',
    },
    {
      question: 'How many times can I travel?',
      answer: 'As many times as possible for you within 12 months under Annual Membership',
    },
    {
      question: 'What’s the minimum time for a volunteer trip?',
      answer: 'Starting from 7 days to 6 months depending upon the hosts & their requirements. You’ve to volunteer at least 24 hrs in a Week.',
    },
  ];
  const handleClick = () =>{
    alert("button is clicked");
  }
  return (
     <div className="faq-container">
        <h1 className='asked'>Frequently asked questions</h1>
        <p className='heading'>
        We are passionate about impactful and sustainable travel, but we know
        it can be overwhelming to begin. 
        Here are some quick tips to help you get started!
        </p>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
   
  );
};

export default FAQ;
