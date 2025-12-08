import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">Get In Touch</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-700 mb-8">
            Feel free to reach out if you're looking for a designer and
            developer, have a question, or just want to connect.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:dondouabiyi@gmail.com" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-center">dondouabiyi@gmail.com</p>
            </a>
            <a href="tel:+250791591966" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600 text-center">+250 (0) 791 591 966</p>
            </a>
            <a href="https://github.com/dondou21" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                <Github className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
              <p className="text-gray-600 text-center">github.com/dondou21</p>
            </a>
          </div>
          <div className="mt-12 p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Send Me a Message
            </h3>
            <form  action="https://formspree.io/f/mqadoadv" method="POST">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
                              focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
                              focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 
                          rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>;
};
export default Contact;