
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let &apos; s Connect</h2>
        <p className="text-lg mb-8">
          I am always open to new opportunities and collaborations. Feel free to reach out to me for any inquiries or just to say hello.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="mailto:sunilkumarsk20198@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-400 transition duration-300"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/sunil-10212a156/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-400 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
