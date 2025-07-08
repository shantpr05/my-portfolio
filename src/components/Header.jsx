import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => (
  <header className='bg-teal-600 py-12 px-4 md:px-16 text-white flex flex-col md:flex-row items-center gap-8'>
    <div className='relative w-64 h-64 shrink-0'>
      <img
        src='/profile.jpg'
        alt='Profile'
        className='object-cover w-full h-full rounded shadow-lg'
      />
      <span className='absolute bottom-4 left-4 text-2xl font-semibold'>
        Ashley Williams
      </span>
    </div>
    <div className='bg-white text-black p-8 shadow-lg max-w-2xl'>
      <h2 className='text-3xl font-bold mb-4'>About me</h2>
      <p className='mb-6'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className='flex gap-4 text-2xl'>
        <a href='https://github.com' aria-label='GitHub'>
          <FaGithub />
        </a>
        <a href='https://linkedin.com' aria-label='LinkedIn'>
          <FaLinkedin />
        </a>
        <a href='https://twitter.com' aria-label='Twitter'>
          <FaTwitter />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
