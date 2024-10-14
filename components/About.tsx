import Image from 'next/image';
import { FC } from 'react';

const About: FC = () => {
  const skills: string[] = [
    'HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 
    'React', 'Next.js', 'Flask', 'Laravel'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/profile-picture.jpg" // Ensure you add your profile picture to the public/images directory
              alt="David Nzube"
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Hello! I&apos;m David Nzube, a passionate FullStack Web Developer with over 4 years of experience in creating robust and scalable web applications.
            </p>
            <p className="text-lg mb-4">
              My expertise spans across various technologies including HTML, CSS, JavaScript, Python, and PHP. I&apos;m proficient in frameworks like React, Next.js, Flask, and Laravel.
            </p>
            <p className="text-lg mb-4">
              I&apos;m dedicated to writing clean, efficient code and constantly learning new technologies to stay at the forefront of web development.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">My Skills</h3>
              <div className="flex flex-wrap">
                {skills.map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
