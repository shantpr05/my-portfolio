import ProjectCard from './ProjectCard';

const data = [
  {
    color: 'bg-red-700',
    title: '📱Mobile Store – Full-Stack eCommerce Web App',
    description:
      'A responsive mobile phone store built with React, Node.js, and MongoDB. Features RESTful APIs, secure authentication, admin CRUD, Google Tag Manager tracking, and full SEO/accessibility compliance.',
  },
  {
    color: 'bg-purple-400',
    title: '🧠 Quiz Game – Interactive JavaScript Trivia App',
    description:
      'A dynamic quiz game built with HTML, CSS, and JavaScript. Features real-time feedback, a progress tracker, and questions fetched from an API using async/await.',
  },
  {
    color: 'bg-green-600',
    title: '🏨 Hotel Management System (React App)',
    description:
      'A collaborative React project to manage hotel listings with features like search, filter, add, edit, and delete. Built with React Router, semantic HTML, and responsive design, using external APIs and custom hooks.',
  },
  {
    color: 'bg-pink-500',
    title: 'Project Four',
    description: 'Short description of the project.',
  },
  {
    color: 'bg-amber-500',
    title: 'Project Five',
    description: 'Short description of the project.',
  },
  {
    color: 'bg-sky-500',
    title: 'Project Six',
    description: 'Short description of the project.',
  },
];

const ProjectsGrid = () => (
  <section className='py-16 px-4 md:px-16'>
    <h2 className='text-3xl font-bold mb-8'>My work</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {data.map((p, idx) => (
        <ProjectCard key={idx} {...p} />
      ))}
    </div>
  </section>
);

export default ProjectsGrid;
