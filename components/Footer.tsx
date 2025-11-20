'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-black border-t border-[#947EA7]/20 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
         
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#947EA7] mb-2">Charlotte</h3>
            <p className="text-[#F5F7FA]/70 text-sm">
              Frontend Developer
            </p>
            <p className="text-[#F5F7FA]/50 text-xs mt-2">
              Creating amazing digital experiences
            </p>
          </motion.div>

         
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[#F5F7FA] mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-[#F5F7FA]/70 hover:text-[#947EA7] transition-colors duration-300 text-sm">
                Home
              </a>
              <a href="#about" className="block text-[#F5F7FA]/70 hover:text-[#947EA7] transition-colors duration-300 text-sm">
                About
              </a>
              <a href="#projects" className="block text-[#F5F7FA]/70 hover:text-[#947EA7] transition-colors duration-300 text-sm">
                Projects
              </a>
              <a href="#contact" className="block text-[#F5F7FA]/70 hover:text-[#947EA7] transition-colors duration-300 text-sm">
                Contact
              </a>
            </div>
          </motion.div>

         
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[#F5F7FA] mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-[#F5F7FA]/10 rounded-full flex items-center justify-center text-[#947EA7] hover:bg-[#947EA7] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-[#F5F7FA]/10 rounded-full flex items-center justify-center text-[#947EA7] hover:bg-[#947EA7] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-[#F5F7FA]/10 rounded-full flex items-center justify-center text-[#947EA7] hover:bg-[#947EA7] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-[#F5F7FA]/10 rounded-full flex items-center justify-center text-[#947EA7] hover:bg-[#947EA7] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-[#F5F7FA]/10 rounded-full flex items-center justify-center text-[#947EA7] hover:bg-[#947EA7] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>

     
        <motion.div
          className="border-t border-[#947EA7]/20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#F5F7FA]/60 text-sm flex items-center justify-center">
            © {currentYear} Charlotte. Made with
            <motion.span
              className="text-black mx-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaHeart />
            </motion.span>
            using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}