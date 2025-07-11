import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, github, live }) => (
  <div className='bg-white shadow-md rounded-xl p-6 transition hover:shadow-xl'>
    <h3 className='text-xl font-semibold mb-2'>{title}</h3>
    <p className='text-gray-700 mb-4'>{description}</p>
    <div className='flex gap-4 text-lg'>
      {github && (
        <a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-blue-600 hover:text-blue-800'
        >
          <FaGithub className='mr-1' />
          GitHub
        </a>
      )}
      {live && (
        <a
          href={live}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-green-600 hover:text-green-800'
        >
          <FiExternalLink className='mr-1' />
          Live Demo
        </a>
      )}
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string,
  live: PropTypes.string,
};

export default ProjectCard;
