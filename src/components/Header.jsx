import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => (
  <header className='bg-teal-600 py-12 px-4 text-white'>
    <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8'>
      <div className='relative w-[28rem] h-[28rem] shrink-0'>
        <img
          src='shanthi.jpg'
          alt='Profile'
          className='object-cover w-full h-full rounded shadow-lg'
        />
        <span className='absolute bottom-4 left-4 text-2xl font-semibold'>
          Shanthi Priya Parvatham
        </span>
      </div>

      <div className='bg-white text-black p-8 shadow-lg max-w-2xl'>
        <h2 className='text-3xl font-bold mb-4'>About me</h2>
        <p className='mb-6'>
          I&apos;m a passionate frontend developer based in Stockholm, currently
          studying at Hyper Island, where I&apos;m deepening my expertise in
          modern web development and user experience design. My journey into is
          is fueled by a love for creating intuitive and impactful digital
          experiences. With over a year of hands-on experience, I specialize in
          React, Redux Toolkit, and TypeScript, building responsive and
          accessible web apps using Tailwind CSS and Shadcn/UI. I&apos;ve also
          worked across the full stack with MERN and React + Strapi, and
          I&apos;m currently diving deeper into Next.js 15 to build scalable,
          full-stack applications. Beyond frontend, I have experience
          integrating RESTful APIs and optimizing backends with Java, Python,
          and Flask. I&apos;m also comfortable with modern development tools
          like Git, Maven, and Jenkins, and I&apos;m eager to explore
          cloud-native technologies like Docker and Kubernetes. I&apos;m known
          for a positive, can-do attitude, strong collaboration skills, and a
          passion for clean, maintainable code. When I&apos;m not coding, I
          enjoy spending time with my family and staying curious about emerging
          tech trends. I&apos;m currently looking for an internship opportunity
          where I can contribute, grow, and continue learning.
        </p>
        <div className='flex gap-4 text-2xl'>
          <a href='https://github.com/shantpr05' aria-label='GitHub'>
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/shanthipriyaparvatham/'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
