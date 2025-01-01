import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import SocialLinks from './SocialLinks';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg">Let's create something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="space-y-4">
              <a
                href="mailto:akshayphutane8@gmail.com"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-6 h-6 mr-3" />
                akshayphutane8@gmail.com
              </a>
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;