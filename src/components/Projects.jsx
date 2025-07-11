import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: '📱 Mobile Store – React (Vite) + Node.js + Express + MongoDB',
      description:
        'A responsive eCommerce app with user/admin roles, product CRUD, secure auth, SEO, and GA4 tracking.',
      github: 'https://github.com/shantpr05/mobile_store',
      live: null,
    },
    {
      title: '❓ Quiz Game – JavaScript',
      description:
        'A fun trivia quiz app with multiple-choice questions, real-time feedback, and an API-based question system.',
      github: 'https://github.com/shantpr05/quiz-game',
      live: 'https://shantpr05.github.io/quiz-game/',
    },
    {
      title: '🏨 Hotel Management System – React',
      description:
        'A group project to manage hotel listings with features like search, filter, add/edit/delete hotels, and custom API integration.',
      github: 'https://github.com/shantpr05/spark_travels',
      live: 'https://spark-travels.netlify.app/',
    },
    {
      title: '🌐 Personal Portfolio – Vite + React',
      description:
        'My portfolio showcasing my work, skills, and background with responsive design and accessibility best practices.',
      github: 'https://github.com/shantpr05/my-portfolio',
      live: 'https://shanthi-portfolio.netlify.app/',
    },
    {
      title: '🖌️ Etch-a-Sketch – JavaScript',
      description:
        'A web-based drawing tool inspired by the classic Etch-a-Sketch. Built using JavaScript, DOM manipulation, and CSS Grid.',
      github: 'https://github.com/shantpr05/Etch-a-Sketch',
      live: 'https://shantpr05.github.io/Etch-a-Sketch/',
    },
    {
      title: '🧸 XR Experience – My Childhood',
      description:
        'A WebXR project that takes users through an immersive journey inspired by childhood memories. Built using A-Frame and Three.js.',
      github: 'https://github.com/shantpr05/my_childhood',
      live: 'https://mychildhoodmemories.netlify.app/',
    },
  ];

  return (
    <section id='projects' className='py-16 px-6 max-w-6xl mx-auto'>
      <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
      <div className='grid gap-8 md:grid-cols-2'>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
