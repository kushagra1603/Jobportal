import React from "react";

function About() {
  return (
    <div>
      <section className="bg-gray-100 py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About Us
          </h1>
          <hr/>        

          {/* Introduction Section */}
          <div className="mb-5 my-5 ">
            <h2 className="text-1xl font-semibold text-gray-800 mb-4 ">
              Our Mission
            </h2>
            <p className="text-gray-700 text-m">
              At <strong>JobPortal</strong>, we aim to bridge the gap between
              job seekers and employers by providing an intuitive and
              easy-to-use platform. Whether you’re a recent graduate or an
              experienced professional, our mission is to help you discover job
              opportunities that match your skills and aspirations.
            </p>
          </div>

          {/* Core Values Section */}
          <div className="mb-5">
            <h2 className="text-1xl font-semibold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-m font-semibold text-gray-700">
                  Commitment to Users
                </h3>
                <p className="text-gray-600 text-sm">
                  Our top priority is making the job search process seamless and
                  efficient for all users, providing you with up-to-date
                  opportunities.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-gray-700">
                  Innovation
                </h3>
                <p className="text-gray-600 text-sm">
                  We continuously evolve to offer new features and tools that
                  make job hunting more effective for our users.
                </p>
              </li>
              <li>
                <h3 className="text-m font-semibold text-gray-700">
                  Integrity
                </h3>
                <p className="text-gray-600 text-sm">
                  We maintain transparency and ethics in all of our operations,
                  ensuring that you have a trusted platform.
                </p>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="mb-12">
            <h2 className="text-1xl font-semibold text-gray-800 mb-4">
              What We Offer
            </h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-m font-semibold text-gray-700">
                  Job Listings
                </h3>
                <p className="text-gray-600 text-sm">
                  We feature a wide range of job listings from various
                  industries, so you can find a role that fits your passion and
                  skills.
                </p>
              </li>
              <li>
                <h3 className="text-m font-semibold text-gray-700">
                  Career Advice
                </h3>
                <p className="text-gray-600 text-sm">
                  Our platform includes resources and expert career advice to
                  help you stand out in the competitive job market.
                </p>
              </li>
              <li>
                <h3 className="text-m font-semibold text-gray-700">
                  Resume & Interview Tips
                </h3>
                <p className="text-gray-600 text-sm">
                  Get guidance on how to create a standout resume and succeed in
                  job interviews.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
