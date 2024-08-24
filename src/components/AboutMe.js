
import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto pl-14 pb-3">
        <Image
            src="/static/others/other_comp/sunilpic.jpeg"
            width={220}
            height={50}
            alt="Sunil"
            style={{ paddingTop: ".8em", borderRadius: "50%"}}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        
        <p className="mb-4">
          Hello! I am <span className="text-blue-500">Sunil</span>, a passionate and detail-oriented Software Engineer with a strong foundation in JavaScript, ReactJS, NodeJS. 
          My journey in the world of coding started when I played a 2MB game, such a simple cricket game with huge downloads on playstore. 
          Then I decided to make a simple game like this in technologies I knew and did whatever it took.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">What I Love</h3>
          <p>
            I thrive on turning complex problems into elegant solutions. 
            My fascination with cutting-edge technologies, coupled with a commitment to writing clean and efficient code, drives me to create robust software applications. 
            I have deep down hunger to explore the world of technology.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">My Approach</h3>
          <p>
            I believe in the power of collaboration and continuous learning. In each project, I strive to not only meet technical requirements but also to contribute innovative ideas that enhance overall project outcomes. 
            I am dedicated to staying updated with industry trends and adopting best practices to deliver high-quality solutions.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Key Strengths</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Programming Languages:</strong> C, C++, PL/SQL, Python
            </li>
            <li>
              <strong>Technologies:</strong> HTML, CSS, JavaScript, ReactJS, NodeJS, MUI, Antd
            </li>
            <li>
              <strong>Problem Solving:</strong> Adept at analyzing problems and developing effective solutions.
            </li>
            <li>
              <strong>Team Collaboration:</strong> Enjoy working in collaborative environments and leveraging collective strengths.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Outside the Code</h3>
          <p>
            When I am not coding, you can find me
            dancing, singing, reading tech articles etc.
            I believe in maintaining a healthy work-life balance to ensure continuous creativity and productivity.
          </p>
        </div>
        <p className="text-lg">
            You can find more information about my biography, experience, skills, education, and other aspects in the attached PDF below.:
            <a href="static/resume/Sunil-SDE.pdf" download="Sunil-SDE.pdf" 
            style={{color:"#0f5bc5"}}
            ><i>Sunil-SDE.pdf</i></a>
        </p>
        <p className="mt-4">Thank you for visiting!</p>
      </div>
    </section>
  );
};

export default AboutMe;
