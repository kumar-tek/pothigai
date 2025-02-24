import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Contact</h2>


{/* Google Map */}
<div className="h-96 bg-gray-200 shadow rounded-lg overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.115916104507!2d77.3131162147928!3d8.959134693564588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0462e2501d9c47%3A0x470bfa4d914e4ef!2s5%2F137(12)%2C%20Thirumalai%20Kovil%20Main%20Rd%2C%20Kuthukalvalasai%2C%20Tenkasi%2C%20Tamil%20Nadu%20627803!5e0!3m2!1sen!2sin!4v1676912430665!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        {/* Main Grid */}
        <div className=" bg-white grid grid-cols-1 lg:grid-row-2 gap-12 ">
          {/* Contact Details & Form */}
          
            {/* Contact Details */}
            <div className=" p-8 shadow rounded-lg mb-8 flex justify-between items-center">
             <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Inquiries</h3>
              <p className="mb-4 text-gray-600">
                For any inquiries & orders, please call:
              </p>
              <p className="text-lg font-bold text-gray-800 mb-4">+91-90423 11211</p>
              <p className="mb-4 text-gray-600">Or fill out the following form:</p>
              </div>
               <div className="text-center ">
              <h3 className="text-xl font-semibold mb-4">Head Office</h3>
              <p className="text-gray-600">
                5/137(12), Thirumalai Kovil Main Road, <br />
                Kuthukalvalasai, Tenkasi - 627803
              </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className=" p-8 shadow rounded-lg w-1/2">
              <h3 className="font-bold text-2xl pb-3">Contact Us </h3>
              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-500 transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          

          
        </div>
      </div>
    </section>
  );
}
