import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Line from '../line';
import Footer from '../pages/Footer';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_cs09nzf', // service ID
      'template_1abir0n', // template ID
      formRef.current,
      'mCxD-AmqLqAAMcQq3' // public key
    )
    .then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message.');
    });

    e.target.reset();
  };

  return (
    <section id="contact">
      <section className="py-30 w-full min-h-screen p-8 bg-[#151515] text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <Line />
          <p className="text-gray-300 mt-2">Ready to discuss your project? Reach out to us for a consultation or just to say hello.</p>
        </div>

        <div className="py-15 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#222121] p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="mb-6 text-gray-300">Feel free to reach out to us through any of these channels.</p>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">📧 nitishpathak203@gmail.com</div>
                <div className="flex items-center gap-3">📍 Jaipur, India</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-2 font-semibold">Connect With Us</h3>
              <div className="flex gap-4 text-2xl">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaWhatsapp /></a>
              </div>
            </div>

            <div className="mt-8 bg-green-700 p-4 rounded-xl">
              <h4 className="font-semibold mb-2">WhatsApp Business</h4>
              <p className="text-sm mb-2">Get instant responses to your queries</p>
              <a href="#" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold">Chat Now</a>
            </div>
          </div>

          <div className="bg-[#222121] p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name" required className="p-3 bg-[#151515] border border-gray-600 rounded-lg text-white" />
                <input type="email" name="email" placeholder="Your Email" required className="p-3 bg-[#151515] border border-gray-600 rounded-lg text-white" />
              </div>
              <input type="text" name="phone" placeholder="Phone Number" required className="w-full p-3 bg-[#151515] border border-gray-600 rounded-lg text-white" />
              <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 bg-[#151515] border border-gray-600 rounded-lg text-white" />
              <textarea name="description" placeholder="Please describe your project or inquiry..." rows="5" required className="w-full p-3 bg-[#151515] border border-gray-600 rounded-lg text-white" />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="consent" required />
                <label htmlFor="consent" className="text-sm text-gray-300">I consent to storing my submitted information.</label>
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-pink-500 rounded-lg font-bold hover:opacity-90">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
