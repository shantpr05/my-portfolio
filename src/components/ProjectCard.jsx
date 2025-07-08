import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, color }) => (
  <div className='bg-white shadow rounded overflow-hidden'>
    <div
      className={`${color} h-40 flex items-center justify-center text-white text-xl font-semibold`}
    >
      screenshot of project
    </div>
    <div className='p-4'>
      <h3 className='font-bold mb-1'>{title}</h3>
      <p className='text-sm text-gray-600 mb-3'>{description}</p>
      <div className='flex gap-4 text-lg'>
        <a href='#' aria-label='GitHub'>
          <FaGithub />
        </a>
        <a href='#' aria-label='Live demo'>
          <FiExternalLink />
        </a>
      </div>
    </div>
  </div>
);
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProjectCard;
