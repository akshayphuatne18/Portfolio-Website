// import React from 'react';

// const ContactForm: React.FC = () => {
//   return (
//     <form className="space-y-4">
//       <div>
//         <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
//         <input
//           type="text"
//           id="name"
//           className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
//         />
//       </div>
//       <div>
//         <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
//         <input
//           type="email"
//           id="email"
//           className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
//         />
//       </div>
//       <div>
//         <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
//         <textarea
//           id="message"
//           rows={4}
//           className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create Gmail compose URL with the user's details
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=placementakshay18@gmail.com&su=${subject}&body=${body}`;

    // Open the Gmail compose window
    window.open(mailtoLink, '_blank');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          id="name"
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          id="email"
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
