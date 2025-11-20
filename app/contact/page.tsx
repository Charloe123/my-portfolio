
'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaComment, FaPhoneAlt, FaMapMarkerAlt,  } from 'react-icons/fa';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setMessage('');

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        form.current!,
        'YOUR_PUBLIC_KEY' 
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div id="contact" className="min-h-screen bg-black p-4 flex flex-col items-center justify-center">

      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 text-[#947EA7] text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let{'\''}s <span className="text-[#F5F7FA]">Connect</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <motion.div
            className="glass-surface p-8 rounded-2xl shadow-2xl border border-[#947EA7]/20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#F5F7FA] flex items-center">
              <FaEnvelope className="mr-3 text-[#947EA7]" />
              Send Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-[#F5F7FA] font-medium text-sm">
                    <FaUser className="inline mr-2 text-[#947EA7]" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 bg-[#F5F7FA]/10 border border-[#947EA7]/30 rounded-lg text-[#F5F7FA] placeholder-[#F5F7FA]/60 focus:outline-none focus:ring-2 focus:ring-[#947EA7] focus:border-[#947EA7] transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#F5F7FA] font-medium text-sm">
                    <FaEnvelope className="inline mr-2 text-[#947EA7]" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 bg-[#F5F7FA]/10 border border-[#947EA7]/30 rounded-lg text-[#F5F7FA] placeholder-[#F5F7FA]/60 focus:outline-none focus:ring-2 focus:ring-[#947EA7] focus:border-[#947EA7] transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-[#F5F7FA] font-medium text-sm">
                    <FaPhoneAlt className="inline mr-2 text-[#947EA7]" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-3 bg-[#F5F7FA]/10 border border-[#947EA7]/30 rounded-lg text-[#F5F7FA] placeholder-[#F5F7FA]/60 focus:outline-none focus:ring-2 focus:ring-[#947EA7] focus:border-[#947EA7] transition-all duration-300"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#F5F7FA] font-medium text-sm">
                    <FaComment className="inline mr-2 text-[#947EA7]" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full p-3 bg-[#F5F7FA]/10 border border-[#947EA7]/30 rounded-lg text-[#F5F7FA] placeholder-[#F5F7FA]/60 focus:outline-none focus:ring-2 focus:ring-[#947EA7] focus:border-[#947EA7] transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-[#F5F7FA] font-medium text-sm">
                  <FaComment className="inline mr-2 text-[#947EA7]" />
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full p-3 bg-[#F5F7FA]/10 border border-[#947EA7]/30 rounded-lg text-[#F5F7FA] placeholder-[#F5F7FA]/60 focus:outline-none focus:ring-2 focus:ring-[#947EA7] focus:border-[#947EA7] transition-all duration-300 resize-none"
                  placeholder="Your message"
                  required
                />
              </div>

              {message && (
                <p className={`text-center ${message.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
              <motion.button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#947EA7] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

         
          <motion.div
            className="glass-surface p-8 rounded-2xl shadow-2xl border border-[#947EA7]/20 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-[#F5F7FA] flex items-center">
              <FaMapMarkerAlt className="mr-3 text-[#947EA7]" />
              Get In Touch
            </h2>

            <div className="space-y-6">
              <motion.div
                className="flex items-center p-4 bg-[#F5F7FA]/5 rounded-lg border border-[#947EA7]/20"
                whileHover={{ scale: 1.02 }}
              >
                <FaEnvelope className="text-[#947EA7] mr-4 text-xl" />
                <div>
                  <p className="text-[#F5F7FA] font-medium">Email</p>
                  <p className="text-[#F5F7FA]/80 text-sm">ncubecharlotte17@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center p-4 bg-[#F5F7FA]/5 rounded-lg border border-[#947EA7]/20"
                whileHover={{ scale: 1.02 }}
              >
                <FaPhoneAlt className="text-[#947EA7] mr-4 text-xl" />
                <div>
                  <p className="text-[#F5F7FA] font-medium">Phone</p>
                  <p className="text-[#F5F7FA]/80 text-sm">+263 77 559 6819</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center p-4 bg-[#F5F7FA]/5 rounded-lg border border-[#947EA7]/20"
                whileHover={{ scale: 1.02 }}
              >
                <FaMapMarkerAlt className="text-[#947EA7] mr-4 text-xl" />
                <div>
                  <p className="text-[#F5F7FA] font-medium">Location</p>
                  <p className="text-[#F5F7FA]/80 text-sm">Victoria Falls, Zimbabwe</p>
                </div>
              </motion.div>
            </div>

          

            <p className="mt-6 text-[#F5F7FA]/70 text-sm text-center">
              I{'\''}m always excited to work on new projects and discuss innovative ideas. Let{'\''}s create something amazing together!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
