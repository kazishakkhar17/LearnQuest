import React from 'react';
import Cards from './Cards';

import list from '../../public/list.json';
import { Link } from 'react-router-dom';
function Course() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-green-500"> Here! :</span>
          </h1>
          <p className="mt-12 text-lg leading-relaxed">
            Are you ready to excel in your IUT admission journey? Our <strong>Premium IUT Question Solve Book</strong> is the ultimate tool for students aiming to secure their spot at one of the most prestigious institutions.
            <br /><br />
            <strong>Why Choose Our Book?</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>📚 <strong>Comprehensive Solutions</strong>: Get detailed, step-by-step answers to past questions, covering all the important topics you need to master.</li>
              <li>💡 <strong>Expert Insights</strong>: Learn the best techniques and strategies from experts who know the IUT admission process inside and out.</li>
              <li>⏳ <strong>Save Time</strong>: Our book is designed to help you study smarter, not harder—focus on what matters most.</li>
              <li>💯 <strong>Boost Confidence</strong>: With our solutions, you’ll walk into the exam room fully prepared and confident.</li>
              <li>📝 <strong>Proven Track Record</strong>: Many of our students have aced their exams and secured top positions at IUT.</li>
            </ul>
            <br />
            Don’t leave your future to chance! Invest in your education today with the <strong>Premium IUT Question Solve Book</strong>—your success starts here.
          </p>

          <Link to="/">
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
