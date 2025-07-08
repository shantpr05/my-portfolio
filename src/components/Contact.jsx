import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => (
  <section className='bg-teal-700 text-white py-16 px-4 md:px-16 flex flex-col md:flex-row gap-8 items-center'>
    <div className='md:w-1/2'>
      <h2 className='text-3xl font-bold mb-4'>Contact me</h2>
      <p className='mb-6'>
        Please get in touch if you think our work could be mutually beneficial!
      </p>

      <address className='not-italic mb-6'>
        Annebovägen 3C
        <br />
        Karlskrona, 37141
      </address>

      <p className='mb-2'>📞 +46734753094</p>
      <p>📧 shantpr.05@gmail.com</p>

      <div className='flex gap-4 text-2xl mt-6'>
        <a href='https://github.com/shantpr05' aria-label='GitHub'>
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/shanthipriyaparvatham/'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a href='https://twitter.com' aria-label='Twitter'>
          <FaTwitter />
        </a>
      </div>
    </div>

    <div className='md:w-1/2'>
      <img
        src='/contact.jpg'
        alt='Shanthi on the phone'
        className='rounded shadow-lg'
      />
    </div>
  </section>
);

export default Contact;
